import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="homeContainer">
      <h1 className="homeTitle">drink-wall</h1>
      <div>
        <ul className="">
          {posts.map((post) => (
            <li key={post._id} className="mb6">
              <Link
              className="under-hov"
                href={`/${post?.slug?.current}`}
              >
                <div className="mb1">
                  {post?.mainImage ? (
                    <img
                      className="prev-img"
                      src={urlFor(post.mainImage)
                        .width(330)
                        .height(260)
                        .quality(80)
                        .auto("format")
                        .url()}
                      alt={post?.mainImage?.alt || ""}
                      width="330"
                      height="260"
                    />
                  ) : null}
                </div>
                <div className="flex-row space-between mb1">
                  <div>{post?.title}</div>
                  <div>{post?.publishedAt &&
                    new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</div>
                </div>

              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/about">about &rarr;</Link>
    </main>
  );
}