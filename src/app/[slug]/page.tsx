import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="postPageContainer">
      <div className="postContainer">
        <h1 className="postTitle">{post?.title}</h1>
        <hr />
        <Link href="/">&larr; Return to home</Link>
      </div>

    </main>
  );
}