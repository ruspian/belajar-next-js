// mengkonfigurasi file next js agar jadi statik ke folder HTML,CSS,JS

/** @type {import('next').NextConfig} */
module.exports = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};
