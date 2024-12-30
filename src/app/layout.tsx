import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/src/app/providers';

const plusJakartaSansFont = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Buy More',
  description: 'Buy More',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSansFont.className} `}>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
