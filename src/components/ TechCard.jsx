import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";

const TechCard = ({ name, img }) => {
  return (
    <BackgroundGradient className="flex flex-col items-center justify-center gap-10 p-8 rounded-3xl bg-black/80 min-h-[160px] min-w-[140px]">
      <img
        src={img}
        alt={name}
        className="w-25 h-16 object-contain"
        loading="lazy"
      />
      <p className="text-white font-medium text-base">{name}</p>
    </BackgroundGradient>
  );
};

export default TechCard;
