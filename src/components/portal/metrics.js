import { REFERRAL_SOURCES } from '../../utils/referralSources';

export const toMonthKey = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-01`;

export const monthsBack = (count) => {
  const now = new Date();
  return toMonthKey(new Date(now.getFullYear(), now.getMonth() - count + 1, 1));
};

export const formatMonth = (monthKey) => {
  const [year, month] = monthKey.split('-').map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

const emptyRow = () => ({ spend: 0, inquiries: 0, newClients: 0 });

const withDerived = (row, avgClientValue) => {
  const revenue = row.newClients * avgClientValue;
  return {
    ...row,
    revenue,
    costPerInquiry: row.inquiries ? row.spend / row.inquiries : null,
    costPerClient: row.newClients ? row.spend / row.newClients : null,
    roi: row.spend ? (revenue - row.spend) / row.spend : null,
  };
};

export function buildMetrics(referralCounts, marketingMonths, avgClientValue) {
  const bySource = Object.fromEntries(
    REFERRAL_SOURCES.map((s) => [s, emptyRow()])
  );
  const byMonth = {};
  const monthRow = (month) => (byMonth[month] ??= emptyRow());

  referralCounts.forEach(({ month, source, inquiries }) => {
    if (bySource[source]) bySource[source].inquiries += inquiries;
    monthRow(month).inquiries += inquiries;
  });

  marketingMonths.forEach(
    ({ month, source, spend, new_clients: newClients }) => {
      const amount = Number(spend);
      if (bySource[source]) {
        bySource[source].spend += amount;
        bySource[source].newClients += newClients;
      }
      monthRow(month).spend += amount;
      monthRow(month).newClients += newClients;
    }
  );

  const totals = Object.values(bySource).reduce(
    (acc, row) => ({
      spend: acc.spend + row.spend,
      inquiries: acc.inquiries + row.inquiries,
      newClients: acc.newClients + row.newClients,
    }),
    emptyRow()
  );

  return {
    totals: withDerived(totals, avgClientValue),
    sources: REFERRAL_SOURCES.map((source) => ({
      source,
      ...withDerived(bySource[source], avgClientValue),
    })),
    months: Object.keys(byMonth)
      .sort()
      .reverse()
      .map((month) => ({
        month,
        ...withDerived(byMonth[month], avgClientValue),
      })),
  };
}
