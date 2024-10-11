// untuk membaca/memanggil data markdown
import { readdir } from "node:fs/promises";

// marked untuk mengconvert markdown ke html
import { marked } from "marked";

import qs from "qs";

const strapi_URL = "http://localhost:1337";

// fungsi mengambil data dari markdown untuk memisahkan content dan metadata
export default async function getPost(slug) {
  const { data } = await fetchPosts({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: ["title", "description", "slug", "body", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 1, withCount: false },
  });
  // melaukan validasi
  if (data.length === 0) {
    return null;
  }

  // mengambil data dari api strapi
  const item = data[0];

  return {
    ...toPost(item),
    body: marked(item.body, { headerIds: false, mangle: false }),
  };
}

// mengambil banyak data markdown yang sesuai
export async function getAllPosts() {
  const { data } = await fetchPosts({
    fields: ["title", "description", "slug", "body", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 3 },
  });
  return data.map(toPost);
}

// membuat fungsi slug agar jadi static
export async function getSlugs() {
  const { data } = await fetchPosts({
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 100 },
  });
  return data.map((item) => item.slug);
}

// fungsi fetch posts
async function fetchPosts(parameters) {
  // url api strapi
  const url =
    `${strapi_URL}/api/posts?` +
    qs.stringify(parameters, { encodeValuesOnly: true });

  // mengambil data dari api strapi
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

function toPost(item) {
  return {
    slug: item.slug,
    title: item.title,
    description: item.description,
    date: item.publishedAt.slice(0, "yyyy-mm-dd".length),
    author: item.author,
    image: strapi_URL + item.image.url,
  };
}
