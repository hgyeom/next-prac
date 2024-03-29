import LoginButton from '@/components/loginButton';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function Write() {
  const session = await getServerSession(authOptions);

  return !session ? (
    <div>
      <h2>로그인 후 이용 바랍니다.</h2>
      <LoginButton />
    </div>
  ) : (
    <div className="p-20">
      <h4>글 작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
