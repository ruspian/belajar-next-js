import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      {/* next route dengan link */}
      <ul className="flex gap-4">
        <li>
          <Link href="/" className="text-gray-800 font-roboto hover:underline">
            Home
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            href="/blog"
            className="text-gray-800 font-roboto hover:underline"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-800 font-roboto hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          {/* menambahkan prefetch agar nextjs tidak melakukan fetch ulang pada link tertentu */}
          <Link
            href="/contact"
            className="text-gray-800 font-roboto hover:underline"
            prefetch
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
