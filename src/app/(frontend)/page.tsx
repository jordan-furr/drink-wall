import Link from "next/link";
import Image from "next/image";
import { PostCard } from "../components/PostCard";
import { getPosts, getTotalPosts } from "@/sanity/lib/queries";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const limit = 12;
  const params = await searchParams;
  const pageNum = Number(params?.page) || 1;

  const start = (pageNum - 1) * limit;
  const end = (limit * pageNum);

  const posts = await getPosts(start, end);
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts / limit);

  return (
    <main className="homeContainer">
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
          {posts.map((post) => (
            <PostCard key={post._id} {...post} />
          ))}
        </div>
        <nav>
          <div className="flex-row space-between pageNav">
            <div>
              {pageNum !== 1 && (
                <Link
                  href={pageNum === 2 ? '/' : {
                    pathname: '/',
                    query: { page: pageNum - 1 }
                  }}
                  className="pageNavItem"
                >
                 &larr; Prev 
                </Link>
              )}
            </div>
            <div>
              {posts.length === limit && pageNum < totalPages && (
                <Link
                  href={{
                    pathname: '/',
                    query: { page: pageNum + 1 }
                  }}
                  className="pageNavItem"
                >
                  Next &rarr;
                </Link>
              )}
            </div>
          </div>
          <div className="text-center flex-col">
            <Link href="/about" className="pageNavItem">About</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}