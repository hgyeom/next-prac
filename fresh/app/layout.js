import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fresh',
  description: 'Next-Prac by Hgyeom',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/list">상품 목록</Link>
          <Link href="/cart">장바구니</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
