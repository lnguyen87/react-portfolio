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
        Operations Manager / Junior Developer
      </h1>

      <div className="flex flex-wrap flex-shrink justify-evenly">
        <div className="md:mt-6 md:w-1/3">
          <h1 className="underline font-bold text-2xl break-all">
            Professional Experience
          </h1>
          <h2 className="font-bold text-lg mt-3">Co-Founder</h2>
          <h3 className="text-gray-600">Primrose Design and Decor LLC.</h3>
          <h4 className="text-xs italic">Sep 2021 - Present </h4>
          <ul className="list-disc mt-4 break-words">
            <li>
              Consult with customers on decorating, wedding designs, and
              seasonal décor projects
            </li>
            <li>Provide design concepts, layouts, and décor staging</li>
            <li>Manage all accounting, billing, and finances</li>
          </ul>
        </div>
        <div className="md:mt-6 md:w-1/3">
          <h1 className="underline font-bold text-2xl break-all">Education</h1>
          <h2 className="font-bold text-lg mt-3">
            University of Utah, School of Business
          </h2>
          <h3 className="text-gray-600">
            Bachelor of Science, Operations Management
          </h3>
          <h4 className="text-xs italic">Graduation Date: 2015</h4>
          <ul className="list-disc mt-4 break-words">
            <li>3.48 GPA</li>
            <li>Dean’s List – 2011, 2012, 2013, 2015</li>
            <li>
              Director of Community Relations and Development - University of
              Utah Ethics Club
            </li>
          </ul>
        </div>
      </div>
      <a
        href={pdf}
        target="_blank"
        rel="noreferrer"
        className="justify-center flex xs:pt-6"
      >
        <button className="xs:mt-6 text-sm shadow-xl bg-orange-600 border-2 hover:bg-orange-700 hover:text-gray-100 border-black font-bold rounded-md p-1 px-2">
          View Resume
        </button>
      </a>
    </section>
  );
}

export default Resume;
