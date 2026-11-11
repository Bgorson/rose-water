import { createClient } from '@supabase/supabase-js';

const url = process.env.REACT_APP_SUPABASE_URL;
const publishableKey = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY;

export const supabase =
  url && publishableKey ? createClient(url, publishableKey) : null;

export async function recordReferralSource(source) {
  if (!supabase) return;
  const { error } = await supabase.from('referrals').insert({ source });
  if (error) console.error('Failed to record referral source', error);
}
