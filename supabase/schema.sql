-- Run once in the Supabase SQL editor.
-- Privacy by design: no table holds names, emails, messages, IPs or any other
-- personal information. Referrals are anonymous counts by source and date.

create table public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);
alter table public.admins enable row level security;
revoke all on public.admins from anon, authenticated;

create function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;
revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

create function public.ping()
returns integer
language sql
as $$ select 1; $$;
grant execute on function public.ping() to anon;

create table public.referrals (
  id bigint generated always as identity primary key,
  source text not null check (source in (
    'Psychology Today', 'Searched Online', 'Zocdoc',
    'Personal Referral', 'Professional Referral', 'Other'
  )),
  submitted_on date not null default current_date
);
alter table public.referrals enable row level security;
revoke all on public.referrals from anon, authenticated;
-- The public site can only supply the source; the date is set by the database.
grant insert (source) on public.referrals to anon, authenticated;
create policy "Anyone can record a referral source"
  on public.referrals for insert to anon, authenticated with check (true);
create policy "Admins can read referrals"
  on public.referrals for select to authenticated using (public.is_admin());
grant select on public.referrals to authenticated;

create view public.referral_counts
with (security_invoker = true) as
  select date_trunc('month', submitted_on)::date as month, source, count(*)::int as inquiries
  from public.referrals
  group by 1, 2;
revoke all on public.referral_counts from anon;
grant select on public.referral_counts to authenticated;

create table public.marketing_months (
  month date not null check (extract(day from month) = 1),
  source text not null check (source in (
    'Psychology Today', 'Searched Online', 'Zocdoc',
    'Personal Referral', 'Professional Referral', 'Other'
  )),
  spend numeric(10, 2) not null default 0 check (spend >= 0),
  new_clients integer not null default 0 check (new_clients >= 0),
  primary key (month, source)
);
alter table public.marketing_months enable row level security;
revoke all on public.marketing_months from anon;
grant select, insert, update, delete on public.marketing_months to authenticated;
create policy "Admins manage marketing data"
  on public.marketing_months for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

create table public.settings (
  id boolean primary key default true check (id),
  avg_client_value numeric(10, 2) not null default 0 check (avg_client_value >= 0)
);
insert into public.settings default values;
alter table public.settings enable row level security;
revoke all on public.settings from anon;
grant select, update on public.settings to authenticated;
create policy "Admins read settings"
  on public.settings for select to authenticated using (public.is_admin());
create policy "Admins update settings"
  on public.settings for update to authenticated
  using (public.is_admin()) with check (public.is_admin());
