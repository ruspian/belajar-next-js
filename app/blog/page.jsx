import { getAllPosts } from "@/lib/post";
import Heading from "../../components/Heading";
import PostCard from "@/components/PostCard";

export const revalidate = 30;

// membuat metadata
export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <Heading>Blog Saya</Heading>
      <p>List blog saya</p>

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
