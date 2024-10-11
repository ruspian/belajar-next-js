// untuk membaca/memanggil data markdown
import { readFile, readdir } from "node:fs/promises";

// untuk mengambil data markdown semacam object atau json
import matter from "gray-matter";

// marked untuk mengconvert markdown ke html
import { marked } from "marked";

import qs from "qs";

const strapi_URL = "http://localhost:1337";

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
  // url api strapi
  const url =
    `${strapi_URL}/api/posts?` +
    qs.stringify(
      {
        fields: ["title", "description", "slug", "body", "publishedAt"],
        populate: { image: { fields: ["url"] } },
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 3 },
      },
      { encodeValuesOnly: true }
    );

  // mengambil data dari api strapi
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    date: item.publishedAt.slice(0, "yyyy-mm-dd".length),
    author: item.author,
    image: strapi_URL + item.image.url,
  }));
}

// membuat fungsi slug agar jadi static
export async function getSlugs() {
  const files = await readdir("./content/blog");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
