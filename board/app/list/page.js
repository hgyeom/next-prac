import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  //   console.log(result[0]._id);

  return (
    <div className="list-bg">
      {result.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <Link prefetch={false} href={'/detail/' + item._id}>
              <h4>{item.title}</h4>
            </Link>
            <p>{item.content}</p>
            <DetailLink />
          </div>
        );
      })}
    </div>
  );
}
