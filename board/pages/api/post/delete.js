import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);

  if (request.method == 'DELETE') {
    try {
      const db = (await connectDB).db('forum');
      const target = await db
        .collection('post')
        .findOne({ _id: new ObjectId(request.body) });

      if (target.author == session.user.email) {
        await db
          .collection('post')
          .deleteOne({ _id: new ObjectId(request.body) });
        return response.status(200).json('삭제완료');
      } else {
        return response.status(401).json('인증 정보 오류');
      }
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}
