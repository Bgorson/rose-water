import {
  GOOGLE_ADS_SOURCE,
  REFERRAL_SOURCES,
} from '../../utils/referralSources';

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

const NOT_SPECIFIED = 'Not specified';

const emptyRow = () => ({ spend: 0, inquiries: 0, newClients: 0 });

const withDerived = (row, avgClientValue) => {
  const revenue = row.newClients * avgClientValue;
  return {
    ...row,
    costPerClient: row.newClients ? row.spend / row.newClients : null,
    roi: row.spend ? (revenue - row.spend) / row.spend : null,
  };
};

export function buildMetrics(referralCounts, marketingMonths, avgClientValue) {
  const inquiriesBySource = Object.fromEntries(
    [...REFERRAL_SOURCES, NOT_SPECIFIED].map((s) => [s, 0])
  );
  const ads = emptyRow();
  const adsByMonth = {};
  const monthRow = (month) => (adsByMonth[month] ??= emptyRow());

  referralCounts.forEach(({ month, source, inquiries }) => {
    const key = source ?? NOT_SPECIFIED;
    if (key in inquiriesBySource) inquiriesBySource[key] += inquiries;
    if (source === GOOGLE_ADS_SOURCE) {
      ads.inquiries += inquiries;
      monthRow(month).inquiries += inquiries;
    }
  });

  marketingMonths
    .filter(({ source }) => source === GOOGLE_ADS_SOURCE)
    .forEach(({ month, spend, new_clients: newClients }) => {
      ads.spend += Number(spend);
      ads.newClients += newClients;
      monthRow(month).spend += Number(spend);
      monthRow(month).newClients += newClients;
    });

  return {
    totalInquiries: Object.values(inquiriesBySource).reduce((a, b) => a + b, 0),
    sources: [...REFERRAL_SOURCES, NOT_SPECIFIED].map((source) => ({
      source,
      inquiries: inquiriesBySource[source],
    })),
    ads: withDerived(ads, avgClientValue),
    months: Object.keys(adsByMonth)
      .sort()
      .reverse()
      .map((month) => ({
        month,
        ...withDerived(adsByMonth[month], avgClientValue),
      })),
  };
}
