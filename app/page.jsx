// mempersingkat path dengan @/ dan confignya sudah kita buat di jsconfig.json
// import Heading from "@/components/Heading";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <>
      <Heading>Ini adalah halaman Home</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, at aliquam
        provident possimus odio voluptatibus quis ipsa praesentium cupiditate
        dicta.
      </p>
    </>
  );
}
