// untuk membaca/memanggil data markdown
import { readFile, readdir } from "node:fs/promises";

// untuk mengambil data markdown semacam object atau json
import matter from "gray-matter";

// marked untuk mengconvert markdown ke html
import { marked } from "marked";

// fungsi mengambil data dari markdown untuk memisahkan content dan metadata
export default async function getPost(slug) {
  const text = await readFile(`./content/blog/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, description, date, author, image },
  } = matter(text);
  const body = marked(content);

  return {
    title,
    description,
    date,
    author,
    image,
    body,
    slug,
  };
}

// mengambil banyak data markdown yang sesuai
export async function getAllPosts() {
  const files = await readdir("./content/blog");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));

  const posts = [];

  //   melakukan perulangan untuk mengambil data markdown
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push(post);
  }
  return posts;
}
