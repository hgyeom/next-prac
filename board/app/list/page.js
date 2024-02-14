import { connectDB } from '@/util/database';
import ListItem from './listItem';
import GoWritePage from './goWritePage';

// 다이나믹 렌더링
export const dynamic = 'force-dynamic';

// 페이지 단위 캐싱. 기존 넥스트의 ISR
export const revalidate = 20;

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
