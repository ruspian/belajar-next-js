import { getAllPosts } from "@/lib/post";
import Heading from "../../components/Heading";
import PostCard from "@/components/PostCard";

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
      {posts.map((post) => (
        <PostCard
          title={post.title}
          href={`/blog/${post.slug}`}
          images={post.image}
          author={post.author}
          date={post.date}
          description={post.description}
        />
      ))}

      {/* <div className="flex flex-wrap">
        <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
          <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
            <img src="/images/b.jpeg" className="w-full" />
            <Link href="/blog/belajarnextjs">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </Link>
          </div>
        </div>

        <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
          <h5 className="text-lg font-bold">Belajar VueJS Fundamental</h5>
          <p className="mb-3 text-gray-800">
            <small>
              Published <u>13.01.2022</u> by {""}
              <a href="#!">Admin</a>
            </small>
          </p>
          <p className="text-gray-800">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
          <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
            <img src="/images/c.jpg" className="w-full" />
            <Link href="/blog/belajarnextjs">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </Link>
          </div>
        </div>

        <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
          <h5 className="text-lg font-bold">Belajar ReactJS Fundamental</h5>
          <p className="mb-3 text-gray-800">
            <small>
              Published <u>13.01.2022</u> by {""}
              <a href="#!">Admin</a>
            </small>
          </p>
          <p className="text-gray-800">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </p>
        </div>
      </div> */}
    </>
  );
}
