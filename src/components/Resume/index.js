import React, { useState } from "react";
import pdf from "../../assets/resume.pdf";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Resume(props) {
  const [category] = useState({
    name: "resume",
    description: "Click to here download my resume",
  });
  return (
    <section className="mt-10 ml-24 text-black">
      <h1
        data-testid="h1tag"
        className="text-4xl mb-2 font-bold decoration-orange-400 underline"
      >
        {capitalizeFirstLetter(category.name)} 
      </h1>
      <a href={pdf} target="_blank" rel="noreferrer">
        <p className="mb-2 text-2xl">{category.description}</p>
      </a>
    </section>
  );
}

export default Resume;
