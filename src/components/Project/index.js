import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Project(props) {
    const { currentCategory } = props ;
    return(
        <section className="mt-10 ml-24 text-black">
            <h1 data-testid="h1tag" className="text-4xl mb-2 font-bold decoration-orange-400 underline">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p className="mb-2 text-2xl">{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Project;