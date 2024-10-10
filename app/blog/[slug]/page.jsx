import getPost from "@/lib/post";
import Heading from "../../../components/Heading";

export default async function PostBlog({ params: { slug } }) {
  const post = await getPost(slug);
  return (
    <>
      <Heading>{post.title}</Heading>
      <p className="italic text-sm pb-2">
        {post.date} - {post.author}
      </p>
      {/* mengambil file di folder  public dengan langsung memanggil folder pathnya saja tanpa folder public */}
      <img
        src={post.image}
        alt=""
        width={640}
        height={360}
        className="rounded"
      />
      {/* merender file markdown ke html */}
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="prose max-w-screen prose-slate"
      />
    </>
  );
}
