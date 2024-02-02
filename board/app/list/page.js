import { connectDB } from '@/util/database';
import ListItem from './listItem';
import GoWritePage from './goWritePage';

export default async function List() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
      <GoWritePage />
    </div>
  );
}
