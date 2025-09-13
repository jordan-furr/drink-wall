import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="homeContainer">
      <h1>drink-wall</h1>
      <div className="overflow-y-auto">
        <h3>Fresh Finds</h3>
        <ul className="">
          {posts.map((post) => (
            <li key={post._id}>
              <Link
                className="under-hov"
                href={`/${post?.slug?.current}`}
              >
                {post?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/">about &rarr;</Link>
    </main>
  );
}