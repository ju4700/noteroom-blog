# Deployment Guide: Move Root Domain to Vercel (Keep Subdomain on cPanel)

## Goal

- noteroom.co -> Vercel
- app.noteroom.co -> Keep on cPanel
- No email break
- No nameserver change

---

## STEP 0 — Before You Touch Anything (Safety Check)

1. Confirm:
   - Your website currently works on cPanel
   - app.noteroom.co exists and works
2. DO NOT:
   - Change nameservers
   - Delete MX / TXT records

---

## STEP 1 — Add Domain in Vercel

1. Open Vercel Dashboard
2. Select your project
3. Go to Settings -> Domains
4. Click Add
5. Enter: noteroom.co
6. Click Add
   Vercel will now show DNS instructions (keep this tab open).

---

## STEP 2 — Open DNS in cPanel

1. Login to cPanel
2. Go to Zone Editor
3. Click Manage next to noteroom.co
   You are now editing live DNS.

---

## STEP 3 — Locate the ROOT DOMAIN Record

Look for A records where Name is:

- @
- OR noteroom.co
- OR noteroom.co.

Example (current):

- Type: A
- Name: @
- Value: 103.xxx.xxx.xxx (cPanel server IP)

This is what routes noteroom.co to cPanel.

---

## STEP 4 — Edit the ROOT A Record (CRITICAL STEP)

Do ONLY this change:

1. Click Edit on the A record with: Name = @
2. Change Value to: 76.76.21.21
3. Save

### Important Rules

- There must be only ONE A record for @
- If you see multiple A records for @, delete all except one
- Do NOT touch MX, TXT, SPF, or DKIM records.

---

## STEP 5 — Verify app.noteroom.co is Untouched

Confirm this record still exists:

- Type: A
- Name: app
- Value: (your cPanel IP)

If yes, continue. If missing, recreate it with your cPanel server IP.

---

## STEP 6 — (Recommended) Fix WWW Domain

### Option A (Best Practice)

1. Delete any: A www (cPanel IP)
2. Add:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

This ensures www.noteroom.co points to Vercel.

---

## STEP 7 — Wait for DNS Propagation

- Usually: 2–10 minutes
- Worst case: 24 hours

---

## STEP 8 — Verify in Vercel

Go back to Vercel -> Domains
You should see:

- noteroom.co -> Configured
- www.noteroom.co -> Configured (if added)

---

## STEP 9 — Test Everything

| URL                     | Expected      |
| ----------------------- | ------------- |
| https://noteroom.co     | Vercel app    |
| https://www.noteroom.co | Vercel app    |
| https://app.noteroom.co | cPanel app    |
| Email                   | Still working |

---

## STEP 10 — (Optional) Redirect Users to Subdomain

If Vercel is only a gateway:

### In Next.js (next.config.js)

```ts
async redirects() {
  return [
    {
      source: '/:path*',
      destination: 'https://app.noteroom.co/:path*',
      permanent: true,
    },
  ]
}
```

---

## FINAL DNS STATE (CORRECT)

- @ -> 76.76.21.21 (Vercel)
- www -> cname.vercel-dns.com
- app -> cPanel server IP
- mail -> cPanel
- MX/TXT -> unchanged

---

## PROHIBITED ACTIONS

- DO NOT Change nameservers
- DO NOT Delete MX records
- DO NOT Add Vercel IP to app.
- DO NOT Keep multiple @ A records
