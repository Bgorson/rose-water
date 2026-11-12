const API_VERSION = 'v26';
const SOURCE = 'Searched Online';
const MONTHS_TO_SYNC = 3;

const env = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable ${name}`);
  return value;
};

const isoDate = (date) => date.toISOString().slice(0, 10);

async function getAccessToken() {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env('GOOGLE_ADS_CLIENT_ID'),
      client_secret: env('GOOGLE_ADS_CLIENT_SECRET'),
      refresh_token: env('GOOGLE_ADS_REFRESH_TOKEN'),
      grant_type: 'refresh_token',
    }),
  });
  const body = await response.json();
  if (!response.ok) {
    throw new Error(`OAuth token refresh failed: ${JSON.stringify(body)}`);
  }
  return body.access_token;
}

async function fetchMonthlySpend(accessToken) {
  const now = new Date();
  const start = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - MONTHS_TO_SYNC + 1, 1)
  );
  const customerId = env('GOOGLE_ADS_CUSTOMER_ID').replace(/-/g, '');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };
  if (process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID) {
    headers['login-customer-id'] =
      process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/-/g, '');
  }

  const response = await fetch(
    `https://googleads.googleapis.com/${API_VERSION}/customers/${customerId}/googleAds:search`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: `
          SELECT segments.month, metrics.cost_micros
          FROM customer
          WHERE segments.date BETWEEN '${isoDate(start)}' AND '${isoDate(now)}'`,
      }),
    }
  );
  const body = await response.json();
  if (!response.ok) {
    throw new Error(`Google Ads query failed: ${JSON.stringify(body)}`);
  }

  const spendByMonth = {};
  for (let i = 0; i < MONTHS_TO_SYNC; i += 1) {
    const month = new Date(
      Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + i, 1)
    );
    spendByMonth[isoDate(month)] = 0;
  }
  (body.results ?? []).forEach(({ segments, metrics }) => {
    spendByMonth[segments.month] += Number(metrics.costMicros ?? 0) / 1e6;
  });
  return spendByMonth;
}

async function saveSpend(spendByMonth) {
  const rows = Object.entries(spendByMonth).map(([month, spend]) => ({
    month,
    source: SOURCE,
    spend: Math.round(spend * 100) / 100,
  }));
  const key = env('SUPABASE_SECRET_KEY');
  const response = await fetch(
    `${env('REACT_APP_SUPABASE_URL')}/rest/v1/marketing_months`,
    {
      method: 'POST',
      headers: {
        apikey: key,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(rows),
    }
  );
  if (!response.ok) {
    throw new Error(`Supabase upsert failed: ${await response.text()}`);
  }
  return rows;
}

export default async () => {
  try {
    const rows = await saveSpend(
      await fetchMonthlySpend(await getAccessToken())
    );
    console.log('Google Ads spend synced', JSON.stringify(rows));
    return new Response('ok');
  } catch (error) {
    console.error('Google Ads sync failed', error.message);
    return new Response(error.message, { status: 500 });
  }
};

export const config = { schedule: '0 9 * * *' };
