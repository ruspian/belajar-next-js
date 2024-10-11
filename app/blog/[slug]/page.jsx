import getPost, { getSlugs } from "@/lib/post";
import Heading from "../../../components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";

// fungsi membuat data markdown jadi static
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

// fungsi generate metadata dari markdown
export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostBlog({ params: { slug } }) {
  const post = await getPost(slug);
  return (
    <>
      <Heading>{post.title}</Heading>
      <div className="flex gap-3 pb-2 items-baseline">
        <p className="italic text-sm pb-2">
          {post.date} - {post.author}
        </p>
        <ShareLinkButton />
      </div>

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
