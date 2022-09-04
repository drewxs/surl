import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  if (req.nextUrl.pathname.startsWith('/api/get-url')) {
    const slug = req.nextUrl.pathname.split('/').pop();

    const data = await (await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)).json();

    if (data?.url) {
      return NextResponse.redirect(data.url);
    }
  }
};
