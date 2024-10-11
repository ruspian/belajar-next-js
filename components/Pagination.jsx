import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Pagination({ href, page, pageCount }) {
  return (
    <div className="flex gap-3 pb-3">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="h-5 w-5" />
      </PaginationLink>
      <span>
        page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </PaginationLink>
    </div>
  );
}

function PaginationLink({ children, href, enabled }) {
  if (!enabled) {
    return (
      <span className="border px-2 py-1 rounded text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-700 cursor-not-allowed">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="border px-2 py-1 rounded text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-700"
    >
      {children}
    </Link>
  );
}
