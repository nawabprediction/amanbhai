import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  try {
    const data: unknown = await req.json();
    if (!data || typeof data !== 'object') return NextResponse.json({ok:false},{status:400});
    const d = data as Record<string,unknown>;
    const event = d.event;
    if (event !== 'PageView' && event !== 'JoinClick') return NextResponse.json({ok:false},{status:400});
    // Ephemeral server log. Plug in a database if persistent analytics are needed.
    console.info('[landing-event]', event, String(d.path ?? '').slice(0,120));
    return NextResponse.json({ok:true});
  } catch { return NextResponse.json({ok:false},{status:400}); }
}
