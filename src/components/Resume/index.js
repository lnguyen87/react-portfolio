import React, { useState } from "react";
import pdf from "../../assets/resume.pdf";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Resume(props) {
  const [category] = useState({
    name: "resume",
    description: "Click to here download my resume",
  });
  return (
    <section className="mt-10 ml-24 text-black sm:h-96">
      <h1
        data-testid="h1tag"
        className="text-4xl mb-2 font-bold decoration-orange-400 underline"
      >
        {capitalizeFirstLetter(category.name)} 
      </h1>
      <a href={pdf} target="_blank" rel="noreferrer">
        <button className="bg-orange-600 border-2 hover:bg-orange-700 hover:text-gray-100 border-black font-bold rounded-md p-1 px-2">View Resume</button>
      </a>

      <div className="flex flex-wrap justify-around">  
        <div className="">
            <h1>Luc Nguyen</h1>
            <h2>Operations Manager/Project Manager</h2>
        </div>
        <div className="">test</div>
    </div>
    </section>
  );
}

export default Resume;
