import React from 'react';

function Header() {
    return(
        <div>
            <nav className="bg-white text-black">
                <ul className="flex flex-wrap justify-between align-center list-none pt-6 pb-6 px-24 font-bold text-2xl">
                <h1 className="text-4xl font-bold">Luc Nguyen</h1>
                <li className="pl-80">
                    <a href="#about-me" className="hover:text-orange-500">About Me</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-orange-500">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-orange-500">Contact</a>
                </li>
                <li className="pr-12">
                    <a href="#resume" className="hover:text-gray-700 bg-orange-600 py-3 px-6 text-white rounded-lg">Resume</a>
                </li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;