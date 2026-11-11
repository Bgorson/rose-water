import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../../utils/supabase';
import { REFERRAL_SOURCES } from '../../utils/referralSources';
import { toMonthKey } from './metrics';
import {
  Button,
  Card,
  CardTitle,
  ErrorText,
  Hint,
  Input,
  Table,
  TableWrap,
} from './styles';

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

const blankEntries = () =>
  Object.fromEntries(
    REFERRAL_SOURCES.map((s) => [s, { spend: '', newClients: '' }])
  );

export default function MonthlyDataForm({
  marketingMonths,
  avgClientValue,
  onSaved,
}) {
  const [month, setMonth] = useState(toMonthKey(new Date()).slice(0, 7));
  const [entries, setEntries] = useState(blankEntries);
  const [clientValue, setClientValue] = useState(String(avgClientValue));
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => setClientValue(String(avgClientValue)), [avgClientValue]);

  useEffect(() => {
    const next = blankEntries();
    marketingMonths
      .filter((row) => row.month.startsWith(month))
      .forEach((row) => {
        next[row.source] = {
          spend: String(row.spend),
          newClients: String(row.new_clients),
        };
      });
    setEntries(next);
  }, [month, marketingMonths]);

  const update = (source, field, value) =>
    setEntries((prev) => ({
      ...prev,
      [source]: { ...prev[source], [field]: value },
    }));

  const save = async () => {
    setError('');
    setStatus('Saving…');
    const rows = REFERRAL_SOURCES.map((source) => ({
      month: `${month}-01`,
      source,
      spend: Number(entries[source].spend) || 0,
      new_clients: Number(entries[source].newClients) || 0,
    }));
    const [{ error: monthError }, { error: settingsError }] = await Promise.all(
      [
        supabase.from('marketing_months').upsert(rows),
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
        Totals only — enter spend from invoices and the number of new clients
        per source from your practice records. Never enter client names or
        details here.
      </Hint>
      <Row>
        <label>
          Month
          <Input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </label>
        <label>
          Average revenue per new client ($)
          <Input
            type="number"
            min="0"
            step="0.01"
            value={clientValue}
            onChange={(e) => setClientValue(e.target.value)}
          />
        </label>
      </Row>
      <TableWrap>
        <Table>
          <thead>
            <tr>
              <th>Source</th>
              <th>Marketing spend ($)</th>
              <th>New clients</th>
            </tr>
          </thead>
          <tbody>
            {REFERRAL_SOURCES.map((source) => (
              <tr key={source}>
                <td>{source}</td>
                <td>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={entries[source].spend}
                    onChange={(e) => update(source, 'spend', e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    type="number"
                    min="0"
                    step="1"
                    value={entries[source].newClients}
                    onChange={(e) =>
                      update(source, 'newClients', e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
      <Row style={{ marginTop: '1rem', marginBottom: 0 }}>
        <Button onClick={save}>Save</Button>
        <span>{status}</span>
      </Row>
      {error && <ErrorText>{error}</ErrorText>}
    </Card>
  );
}
