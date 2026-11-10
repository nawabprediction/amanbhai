import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export function GET() {
  const link = process.env.TELEGRAM_INVITE_URL || 'https://telegram.me/+HbZleucyQvQ2OWY1';
  const valid = /^https:\/\/(t\.me|telegram\.me)\//i.test(link);
  const pixelId = process.env.META_PIXEL_ID || '3638766372965737';
  return NextResponse.json({ link: valid ? link : '', pixelId: /^\d{8,20}$/.test(pixelId) ? pixelId : '' }, { headers: { 'Cache-Control': 'no-store' } });
}
