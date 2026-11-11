import React, { useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../../utils/supabase';
import { Button, Card, CardTitle, ErrorText, Input } from './styles';

const Narrow = styled(Card)`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export default function PortalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) setError(signInError.message);
    setSubmitting(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <Narrow>
        <CardTitle>Staff Login</CardTitle>
        <Input
          type="email"
          placeholder="Email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Signing in…' : 'Sign in'}
        </Button>
        {error && <ErrorText>{error}</ErrorText>}
      </Narrow>
    </form>
  );
}
