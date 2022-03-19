import React from 'react';

function Header() {
    return(
        <div>
            <nav>
                <h1 className="text-2xl font-bold">Luc Nguyen</h1>
                <ul className="flex flex-wrap justify-between align-center list-none pt-14 px-24 font-bold text-3xl">
                <li>
                    <a href="#about-me" className="hover:text-purple-800">About Me</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-purple-800">Projects</a>
                </li>
                <li>
                    <a href="#contact-me" className="hover:text-purple-800">Contact Me</a>
                </li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;