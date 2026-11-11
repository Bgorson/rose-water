#Portfolio Site

LIVE AT: 
https://www.rosewatterchicounseling.com/

## Staff portal (`/portal`)

Login-protected referral and marketing ROI dashboard backed by Supabase.

**Privacy:** the database stores only the referral source and the date of each
contact-form submission, plus monthly spend/new-client totals entered by staff.
Never store names, emails, messages or other client information in Supabase.

### Setup

1. Create a free Supabase project and run `supabase/schema.sql` in its SQL editor.
2. In Supabase → Authentication → Sign In / Providers, turn off **Allow new users to sign up**.
3. Add each staff member under Authentication → Users → **Add user**, then grant access:
   ```sql
   insert into public.admins (user_id)
   select id from auth.users where email = 'staff@example.com';
   ```
4. In Netlify → Site configuration → Environment variables, set
   `REACT_APP_SUPABASE_URL` and `REACT_APP_SUPABASE_PUBLISHABLE_KEY` (the Project URL and the **publishable** key `sb_publishable_…`, never the secret key),
   then redeploy. For local development, put the same values in `.env`.

`netlify/functions/supabase-keepalive.mjs` pings the database every 3 days so the
free-tier project isn't paused for inactivity.
