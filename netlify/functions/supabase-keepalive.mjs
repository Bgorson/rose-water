// Free-tier Supabase projects pause after 7 days without activity.
export default async () => {
  const url = process.env.REACT_APP_SUPABASE_URL;
  const key = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY;
  const response = await fetch(`${url}/rest/v1/rpc/ping`, {
    method: 'POST',
    headers: { apikey: key },
  });
  console.log('Supabase keepalive status', response.status);
};

export const config = { schedule: '0 12 */3 * *' };
