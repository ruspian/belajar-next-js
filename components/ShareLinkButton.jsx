// mengubah sesi ini menjadi client component dengan use client
"use client";

import { LinkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);
  function handleClick() {
    // mengambil link blog
    navigator.clipboard.writeText(window.location.href);

    setCopied(true);
    // mengatur waktu mengcopy
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <button
      onClick={handleClick}
      className="border flex px-2 py-1 gap-1 items-center rounded text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-700"
    >
      <LinkIcon className="h-4 w-4" />
      {copied ? "Link Disalin" : "Bagikan Link"}
    </button>
  );
}
