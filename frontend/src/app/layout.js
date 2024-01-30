'use client';

import './globals.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { UserContextProvider } from '@/components/store/user-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IECG Visualizer',
  description: 'IECG Visualizer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </head>
      <body className={inter.className}>
        <UserContextProvider>
          <Header />
          {children}
          <Footer />
        </UserContextProvider>

        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
      </body>
    </html>
  );
}
