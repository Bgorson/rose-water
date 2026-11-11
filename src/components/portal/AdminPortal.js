import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { supabase } from '../../utils/supabase';
import PortalLogin from './PortalLogin';
import PortalDashboard from './PortalDashboard';
import { Button, Card, Page } from './styles';

export default function AdminPortal() {
  const [session, setSession] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    if (!supabase) return undefined;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_event, next) =>
      setSession(next)
    );
    return () => data.subscription.unsubscribe();
  }, []);

  const userId = session?.user?.id;

  useEffect(() => {
    setIsAdmin(null);
    if (!userId) return;
    supabase
      .rpc('is_admin')
      .then(({ data, error }) => setIsAdmin(!error && data === true));
  }, [userId]);

  const signOut = (
    <Button $secondary onClick={() => supabase.auth.signOut()}>
      Sign out
    </Button>
  );

  let content;
  if (!supabase) content = <Card>The staff portal is not configured.</Card>;
  else if (session === undefined || (session && isAdmin === null))
    content = <p>Loading…</p>;
  else if (!session) content = <PortalLogin />;
  else if (!isAdmin)
    content = (
      <Card>
        <p>This account does not have access to the staff portal.</p>
        {signOut}
      </Card>
    );
  else content = <PortalDashboard header={signOut} />;

  return (
    <Page>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Staff Portal | Rosewatter Chicagoland Counseling</title>
      </Helmet>
      {content}
    </Page>
  );
}
