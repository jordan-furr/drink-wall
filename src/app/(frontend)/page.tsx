import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <main className="homeContainer">
      <h1>drink-wall</h1>
      <h3>Fresh Finds</h3>
      <ul className="">
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              className="under-hov"
              href={`/posts/${post?.slug?.current}`}
            >
              {post?.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">about &rarr;</Link>
    </main>
  );
}