import { db } from '@/db';
import Image from 'next/image';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((s) => {
    return <div key={s.id}>{s.title}</div>;
  });

  return (
    <div>
      <h1>Home</h1>
      <div>{renderedSnippets}</div>
    </div>
  );
}
