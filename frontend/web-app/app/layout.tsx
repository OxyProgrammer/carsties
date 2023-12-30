import type { Metadata } from 'next';
import { getCurrentUser } from './actions/authActions'
import './globals.css';
import Navbar from './nav/Navbar';
import ToasterProvider from './providers/ToasterProvider';
import SignalRProvider from './providers/SignalRProvider';

export const metadata: Metadata = {
  title: 'Carsties',
  description: 'An UI for the Carsties Bidding application.',
};

export default async function  RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <html lang='en'>
      <body>
        <ToasterProvider />
        <Navbar />
        <main className='container mx-auto px-5 pt-10'>
          <SignalRProvider  user={user}>{children}</SignalRProvider>
        </main>
      </body>
    </html>
  );
}
