import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import LoginButton from '@/components/loginButton';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutButton from '@/components/logoutButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Board',
  description: 'Hg',
};

export default async function RootLayout({ children }) {
  // 현재 로그인 정보 가져오기
  const session = await getServerSession(authOptions);

  // console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/" className="logo">
            Appleforum
          </Link>
          <Link href="/list">List</Link>
          {session ? (
            <span>
              {session.user.name} <LogoutButton />
            </span>
          ) : (
            <LoginButton />
          )}
        </div>
        {children}
      </body>
    </html>
  );
}
