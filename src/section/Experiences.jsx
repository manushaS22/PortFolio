import React from "react";
import TechCard from "../components/ TechCard";
import { techData } from "../constants";
const Experiences = () => {
  return (
    <section id="experiences">
    <div className="w-full px-4 md:px-12 py-12">
        <h2 className='text-heading'>Experiences</h2>
      <h2 className="text-left text-white text-2xl font-bold mt-10 mb-10">
        These are the technologies I've worked with
      </h2>

    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-15">
        {techData.map((tech, index) => (
        <TechCard key={index} name={tech.name} img={tech.img} />
  ))}
</div>

    </div>
    </section>
  );
};

export default Experiences;
