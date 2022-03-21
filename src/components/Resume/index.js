import React from 'react';
import pdf from '../../assets/resume.pdf';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Resume(props) {
    const { currentCategory } = props ;
    return(
        <section className="mt-10 ml-24 text-black">
            <h1 data-testid="h1tag" className="text-4xl mb-2 font-bold decoration-orange-400 underline">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <a href={pdf}><p className="mb-2 text-2xl">{currentCategory.description}</p></a>
        </section>
    );
}

export default Resume;