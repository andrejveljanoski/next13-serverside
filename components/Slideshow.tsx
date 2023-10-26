import React from "react";
import ImageCarousel from "./ImageCarousel";
import { getAllCities } from "../app/api/cities";

const HomePage: React.FC = async () => {
  const cities = await getAllCities();

  return (
    <div>
      <ImageCarousel
        images={cities.map((c) => ({
          src: c.image,
          link: c.name,
        }))}
      />
    </div>
  );
};

export default HomePage;
