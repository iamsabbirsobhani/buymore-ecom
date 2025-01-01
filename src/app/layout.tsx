import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Providers } from '@/src/app/providers';
import Navbar from '@/components/Navbar';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Buy More',
  description: 'Buy More',
};

const hmSansRegular = localFont({
  src: './fonts/HM-Sans-Regular.ttf',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hmSansRegular.className} `}>
        <Providers>
          <Navbar />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
