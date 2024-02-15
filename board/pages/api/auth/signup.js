import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(request, response) {
  if (request.method == 'POST') {
    try {
      //암호화
      const hash = await bcrypt.hash(request.body.password, 10);
      request.body.password = hash;

      let db = (await connectDB).db('forum');
      await db.collection('user_cred').insertOne(request.body);
      return response.status(200).json('성공');
    } catch (error) {
      console.log('실패', error);
      return response.status(500).json('에러');
    }
  }
}
