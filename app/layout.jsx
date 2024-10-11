import Navbar from "../components/Navbar";
import { roboto } from "./fonts";

export const metadata = {
  title: {
    default: "Situs Next JS",
    template: "%s | Situs Next JS",
  },
};

// css
import "./global.css";
export default function Layout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="bg-gray-100 flex flex-col px-4 py-4 min-h-screen">
        {/* header */}
        <header>
          <Navbar />
        </header>

        {/* main */}
        <main className="py-4 grow">{children}</main>

        {/* footer */}
        <footer className="border-t py-3 text-center text-xs">
          <p>Belajar Next JS Fundamental | Copyright 2024</p>
        </footer>
      </body>
    </html>
  );
}
