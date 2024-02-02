import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  if (request.method == 'DELETE') {
    try {
      const db = (await connectDB).db('forum');
      await db
        .collection('post')
        .deleteOne({ _id: new ObjectId(request.body) });
      return response.status(200).json('삭제완료');
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}
