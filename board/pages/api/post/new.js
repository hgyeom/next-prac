import { connectDB } from '@/util/database';

export default async function handler(request, response) {
  if (request.method == 'POST') {
    if (!request.body.title || !request.body.content) {
      return response.status(400).json('제목 내용 작성좀');
    }
    try {
      const db = (await connectDB).db('forum');
      const result = await db.collection('post').insertOne(request.body);
      return response.status(200).redirect('/list');
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}
