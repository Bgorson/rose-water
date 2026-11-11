import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../../utils/supabase';
import { colors } from '../../utils/colors';
import { buildMetrics, formatMonth, monthsBack } from './metrics';
import MonthlyDataForm from './MonthlyDataForm';
import {
  Card,
  CardTitle,
  ErrorText,
  Hint,
  Input,
  Table,
  TableWrap,
} from './styles';

const RANGES = [3, 6, 12, 24];

const currency = (n) =>
  n === null
    ? '—'
    : n.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });
const percent = (n) => (n === null ? '—' : `${Math.round(n * 100)}%`);

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.75rem;
    margin: 0;
  }

  select {
    width: auto;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Stat = styled(Card)`
  margin: 0;

  span {
    color: ${colors.muted};
    font-size: 0.85rem;
  }

  strong {
    display: block;
    font-size: 1.6rem;
    margin-top: 0.25rem;
  }
`;

const BarRow = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr 70px;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 0.6rem;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    grid-template-columns: 110px 1fr 60px;
  }
`;

const Track = styled.div`
  background: ${colors.sand};
  border-radius: 6px;
  height: 14px;
  overflow: hidden;
`;

const Fill = styled.div`
  background: ${colors.sageDark};
  height: 100%;
  width: ${(p) => p.$pct}%;
`;

const MetricRows = ({ rows, label }) =>
  rows.map((row) => (
    <tr key={label(row)}>
      <td>{label(row)}</td>
      <td>{currency(row.spend)}</td>
      <td>{row.inquiries}</td>
      <td>{currency(row.costPerInquiry)}</td>
      <td>{row.newClients}</td>
      <td>{currency(row.costPerClient)}</td>
      <td>{currency(row.revenue)}</td>
      <td>{percent(row.roi)}</td>
    </tr>
  ));

const MetricHead = ({ first }) => (
  <thead>
    <tr>
      <th>{first}</th>
      <th>Spend</th>
      <th>Inquiries</th>
      <th>Cost / inquiry</th>
      <th>New clients</th>
      <th>Cost / client</th>
      <th>Est. revenue</th>
      <th>ROI</th>
    </tr>
  </thead>
);

export default function PortalDashboard({ header }) {
  const [range, setRange] = useState(12);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    const since = monthsBack(range);
    const [referrals, marketing, settings] = await Promise.all([
      supabase.from('referral_counts').select('*').gte('month', since),
      supabase.from('marketing_months').select('*').gte('month', since),
      supabase.from('settings').select('avg_client_value').single(),
    ]);
    const failure = referrals.error || marketing.error || settings.error;
    if (failure) {
      setError(failure.message);
      return;
    }
    setError('');
    setData({
      referralCounts: referrals.data,
      marketingMonths: marketing.data,
      avgClientValue: Number(settings.data.avg_client_value),
    });
  }, [range]);

  useEffect(() => {
    load();
  }, [load]);

  const metrics = useMemo(
    () =>
      data &&
      buildMetrics(
        data.referralCounts,
        data.marketingMonths,
        data.avgClientValue
      ),
    [data]
  );

  const maxInquiries = metrics
    ? Math.max(1, ...metrics.sources.map((s) => s.inquiries))
    : 1;

  return (
    <>
      <Toolbar>
        <h1>Practice Insights</h1>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Input
            as="select"
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
          >
            {RANGES.map((r) => (
              <option key={r} value={r}>
                Last {r} months
              </option>
            ))}
          </Input>
          {header}
        </div>
      </Toolbar>

      {error && <ErrorText>{error}</ErrorText>}
      {!metrics && !error && <p>Loading…</p>}

      {metrics && (
        <>
          <Stats>
            <Stat as="div">
              <span>Inquiries</span>
              <strong>{metrics.totals.inquiries}</strong>
            </Stat>
            <Stat as="div">
              <span>Marketing spend</span>
              <strong>{currency(metrics.totals.spend)}</strong>
            </Stat>
            <Stat as="div">
              <span>New clients</span>
              <strong>{metrics.totals.newClients}</strong>
            </Stat>
            <Stat as="div">
              <span>Marketing ROI</span>
              <strong>{percent(metrics.totals.roi)}</strong>
            </Stat>
          </Stats>

          <Card>
            <CardTitle>Where Inquiries Come From</CardTitle>
            <Hint>
              From the &quot;How did you hear about us?&quot; field on the
              contact form.
            </Hint>
            {metrics.sources.map((s) => (
              <BarRow key={s.source}>
                <span>{s.source}</span>
                <Track>
                  <Fill $pct={(s.inquiries / maxInquiries) * 100} />
                </Track>
                <span style={{ textAlign: 'right' }}>
                  {s.inquiries}
                  {metrics.totals.inquiries > 0 &&
                    ` (${Math.round((s.inquiries / metrics.totals.inquiries) * 100)}%)`}
                </span>
              </BarRow>
            ))}
          </Card>

          <Card>
            <CardTitle>ROI by Source</CardTitle>
            <Hint>
              ROI = (new clients × average revenue per client − spend) ÷ spend.
              Shown as — when a source has no spend recorded.
            </Hint>
            <TableWrap>
              <Table>
                <MetricHead first="Source" />
                <tbody>
                  <MetricRows rows={metrics.sources} label={(r) => r.source} />
                </tbody>
                <tfoot>
                  <MetricRows
                    rows={[{ ...metrics.totals }]}
                    label={() => 'Total'}
                  />
                </tfoot>
              </Table>
            </TableWrap>
          </Card>

          <Card>
            <CardTitle>Month by Month</CardTitle>
            <Hint>
              Compare months as spend changes to see whether more spend brings
              proportionally more inquiries and clients.
            </Hint>
            {metrics.months.length === 0 ? (
              <p>No data for this period yet.</p>
            ) : (
              <TableWrap>
                <Table>
                  <MetricHead first="Month" />
                  <tbody>
                    <MetricRows
                      rows={metrics.months}
                      label={(r) => formatMonth(r.month)}
                    />
                  </tbody>
                </Table>
              </TableWrap>
            )}
          </Card>

          <MonthlyDataForm
            marketingMonths={data.marketingMonths}
            avgClientValue={data.avgClientValue}
            onSaved={load}
          />
        </>
      )}
    </>
  );
}
