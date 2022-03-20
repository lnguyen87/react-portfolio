import React from 'react';
import self from '../../assets/images/img.jpg';

function About() {
    return (
        <section className="flex justify-center">
        <div className="text-2xl w-1/2 mt-10 ml-10">
            <h1 id="about" className="text-4xl mt-24 first-letter:font-windsong first-letter:text-7xl">H i, I'm Luc Nguyen.</h1>
            <p className="mt-12">
                I am a well-developed professional with extensive Operations Management and Organizational Leadership experience. 
            </p>
            <p className="mt-6">
                I graduated from the David Eccles School of Business at the University of Utah with a Bachelor of Science degree in Operations Management.
            </p>
            <p className="mt-6">
                I am currently enrolled in a full-stack developer bootcamp to obtain critical skills to meet future demands. 
            </p>
        </div>
        <img src={self} alt="self" className="h-80 opacity-80 mt-40 ml-12 flex align-bottom"></img>
        </section>
    );
}

export default About;