# Aman Bhai Community landing page

A responsive landing page inspired by the design you uploaded, with a dynamic Telegram destination, a lightweight server-side click event endpoint, and an optional Meta Pixel. This project is branded AmanBhai and uses the Telegram URL you provided.

## Run locally

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Edit `TELEGRAM_INVITE_URL` to `https://telegram.me/+HbZleucyQvQ2OWY1`.
5. Optionally set `META_PIXEL_ID`. Only enable tracking where you have the required notice/consent.
6. Run `npm run dev` and open `http://localhost:3000`.

## Deploy

Push the folder to GitHub and import it into Vercel. Set `TELEGRAM_INVITE_URL` and optionally `META_PIXEL_ID` in Vercel Project → Settings → Environment Variables. Redeploy after changing variables.

## Edit the design

Change `public/landing.html` for headings, theme colors, buttons, layout and logo. APIs live in `app/api/link/route.ts` and `app/api/ev/route.ts`.

## Notes

- `/api/link` returns the SAME Telegram destination to all visitors, including reviewers; it does not cloak.
- The page uses a Telegram-only allowlist for destinations.
- `/api/ev` currently writes counts as individual server console events. It is not a database/dashboard and doesn't persist analytics.
- A dynamic redirect system does not guarantee Meta Ads approval. Follow Meta advertising policies and accurately describe the destination.
- If your business collects personal data or uses Meta Pixel, provide an appropriate privacy notice and consent choices as required.
