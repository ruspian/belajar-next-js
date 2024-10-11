// mengubah sesi ini menjadi client component dengan use client
"use client";

export default function ShareLinkButton() {
  function handleClick() {
    console.log("tombol di klik");
  }
  return (
    <button
      onClick={handleClick}
      className="border px-2 py-1 rounded text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-700"
    >
      Salin Link
    </button>
  );
}
