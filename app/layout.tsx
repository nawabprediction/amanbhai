import type { ReactNode } from 'react';
export const metadata = { metadataBase: new URL('https://amanbhaistore.online'), title: 'Aman Bhai Community' };
export default function RootLayout({ children }: { children: ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
