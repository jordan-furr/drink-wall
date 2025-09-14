import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Post } from '../components/Post'
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
    <main className="pageContainer">
      <div className="postSpotlight ml5">
        <Post {...post} />
        <Link href="/" className="under-hov">&larr; Return to home</Link>
      </div>
    </main>
  );
}