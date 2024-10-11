import { writeFileSync } from "node:fs";
import qs from "qs";

// url api strapi
const url =
  "http://localhost:1337/api/posts" +
  "?" +
  qs.stringify(
    {
      fields: ["title", "description", "slug", "body", "publishedAt"],
      populate: { image: { fields: ["url"] } },
      sort: ["publishedAt:desc"],
      pagination: { pageSize: 3, page: 1 },
    },
    { encodeValuesOnly: true }
  );

// mengambil data dari api strapi
const response = await fetch(url);
const body = await response.json();

const posts = JSON.stringify(body, null, 2);
// console.log(posts);

// membuat file strapi response dalam folder script
const file = "script/strapi-response.json";
writeFileSync(file, posts, "utf-8");
