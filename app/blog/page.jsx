import { getAllPosts } from "@/lib/post";
import Heading from "../../components/Heading";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export const revalidate = 30;

// membuat metadata
export const metadata = {
  title: "Blog",
};

export default async function BlogPage({ searchParams }) {
  const halaman = parsePageParams(searchParams.halaman);
  const posts = await getAllPosts();
  return (
    <>
      <Heading>Blog Saya</Heading>
      <p>List blog saya</p>

      <div className="flex gap-3 pb-3">
        <Link href={`/blog?halaman=${halaman - 1}`}>&lt;</Link>
        <span>Halaman {halaman}</span>
        <Link href={`/blog?halaman=${halaman + 1}`}>&gt;</Link>
      </div>

      {/* looping data blog yang ada di folder content/blog */}
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          href={`/blog/${post.slug}`}
          images={post.image}
          author={post.author}
          date={post.date}
          description={post.description}
        />
      ))}
    </>
  );
}

function parsePageParams(paramValue) {
  const halaman = parseInt(paramValue);
  if (paramValue) {
    if (isFinite(halaman) && halaman > 0) {
      return halaman;
    }
  }
  return 1;
}
