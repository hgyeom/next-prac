import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  if (request.method == 'POST') {
    if (!request.body.title || !request.body.content) {
      return response.status(400).json('제목 내용 작성좀');
    }
    try {
      const newBody = {
        title: request.body.title,
        content: request.body.content,
      };
      const db = (await connectDB).db('forum');
      await db
        .collection('post')
        .updateOne({ _id: new ObjectId(request.body._id) }, { $set: newBody });
      return response.redirect(302, '/list');
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}
