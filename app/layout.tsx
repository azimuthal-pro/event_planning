import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cynthia Wilson Signature Events',
  description: 'Elegant event planning services for weddings, corporate events, and private celebrations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
