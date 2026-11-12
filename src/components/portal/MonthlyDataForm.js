import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../../utils/supabase';
import { GOOGLE_ADS_SOURCE } from '../../utils/referralSources';
import { toMonthKey } from './metrics';
import { Button, Card, CardTitle, ErrorText, Hint, Input } from './styles';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-end;
  margin-bottom: 1rem;

  label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.85rem;
  }
`;

export default function MonthlyDataForm({
  marketingMonths,
  avgClientValue,
  onSaved,
}) {
  const [month, setMonth] = useState(toMonthKey(new Date()).slice(0, 7));
  const [newClients, setNewClients] = useState('');
  const [clientValue, setClientValue] = useState(String(avgClientValue));
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const adsRow = marketingMonths.find(
    (row) => row.source === GOOGLE_ADS_SOURCE && row.month.startsWith(month)
  );

  useEffect(() => setClientValue(String(avgClientValue)), [avgClientValue]);

  useEffect(
    () => setNewClients(adsRow ? String(adsRow.new_clients) : ''),
    [adsRow]
  );

  const save = async () => {
    setError('');
    setStatus('Saving…');
    const [{ error: monthError }, { error: settingsError }] = await Promise.all(
      [
        supabase.from('marketing_months').upsert({
          month: `${month}-01`,
          source: GOOGLE_ADS_SOURCE,
          new_clients: Number(newClients) || 0,
        }),
        supabase
          .from('settings')
          .update({ avg_client_value: Number(clientValue) || 0 })
          .eq('id', true),
      ]
    );
    const failure = monthError || settingsError;
    if (failure) {
      setError(failure.message);
      setStatus('');
      return;
    }
    setStatus('Saved');
    onSaved();
  };

  return (
    <Card>
      <CardTitle>Enter Monthly Numbers</CardTitle>
      <Hint>
        Totals only. Ad spend syncs nightly from Google Ads; enter how many new
        clients came from ads or online search that month. Never enter client
        names or details here.
      </Hint>
      <Row>
        <label htmlFor="portal-month">
          Month
          <Input
            id="portal-month"
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </label>
        <label htmlFor="portal-ad-spend">
          Google Ads spend ($)
          <Input
            id="portal-ad-spend"
            type="number"
            value={adsRow ? String(adsRow.spend) : '0'}
            readOnly
          />
        </label>
        <label htmlFor="portal-new-clients">
          New clients from ads
          <Input
            id="portal-new-clients"
            type="number"
            min="0"
            step="1"
            value={newClients}
            onChange={(e) => setNewClients(e.target.value)}
          />
        </label>
        <label htmlFor="portal-client-value">
          Average revenue per new client ($)
          <Input
            id="portal-client-value"
            type="number"
            min="0"
            step="0.01"
            value={clientValue}
            onChange={(e) => setClientValue(e.target.value)}
          />
        </label>
      </Row>
      <Row style={{ marginBottom: 0 }}>
        <Button onClick={save}>Save</Button>
        <span>{status}</span>
      </Row>
      {error && <ErrorText>{error}</ErrorText>}
    </Card>
  );
}
