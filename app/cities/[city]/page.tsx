import { getCityData } from "@/app/api/cities";
import Image from "next/image";

export default async function City({ params }: { params: { city: string } }) {
  const cityData = await getCityData({ name: params.city });

  return (
    <div
      className="w-full gap-10 flex items-center"
      style={{ height: "700px" }}
    >
      <div className="w-1/2 h-auto self-start flex flex-col items-start gap-5 bg-white rounded p-5">
        <div className="font-bold text-3xl">{cityData.name.toUpperCase()}</div>
        <div className="w-full text-left text-xl">{cityData.description}</div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center relative">
        <Image
          className="rounded-xl border-solid border-white border-2"
          src={cityData.image}
          alt={cityData.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
