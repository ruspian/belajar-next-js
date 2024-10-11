// mengubah sesi ini menjadi client component dengan use client
"use client";

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
      className="border px-2 py-1 rounded text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-700"
    >
      {copied ? "Link Disalin" : "Bagikan Link"}
    </button>
  );
}
