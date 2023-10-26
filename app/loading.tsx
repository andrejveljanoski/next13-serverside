import Image from "next/image";
import Gif from "../components/images/switzerland-switzerlandpictures.gif";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="text-center screen flex justify-center items-center">
      <div>
        <h2 className="p-1 rounded-xl font-italic border-black border-10 bg-white">
          The page will be loaded shortly
        </h2>
        <Image
          className="w-full rounded-xl border-solid border-2 bg-current "
          src={Gif}
          alt="img"
          quality={100}
        ></Image>
      </div>
    </main>
  );
}
