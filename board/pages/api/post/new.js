import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    return false;
  }

  if (request.method == 'POST') {
    if (!request.body.title || !request.body.content) {
      return response.status(400).json('제목 내용 작성좀');
    }
    try {
      request.body.author = session.user.email;
      const db = (await connectDB).db('forum');
      const result = await db.collection('post').insertOne(request.body);
      return response.status(200).redirect('/list');
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}
