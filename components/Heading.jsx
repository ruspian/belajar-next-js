// membuat komponen reuseble atau komponen yang bisa digunakan dimana saja

export default function Heading({ children }) {
  return <h1 className="font-roboto text-2xl font-bold pb-3">{children}</h1>;
}
