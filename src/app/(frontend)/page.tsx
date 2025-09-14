import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { PostCard } from "../components/PostCard";
import { Title } from "../components/Title";

export default async function Home() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="homeContainer">
      <Title>drink-wall</Title>
      <div className="drinkHero">
        <Image
          src={"/drinkwall.png"}
          alt="Example"
          width={2750}
          height={778}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="outerPostContainer">
        <div className="postsContainer">
          {posts.map((post, i) => (
            <div key={i} className="cell">
               <PostCard key={post._id} {...post} />
            </div>
          ))}
        </div>
      </div>
      <Link href="/about">about &rarr;</Link>
    </main>
  );
}