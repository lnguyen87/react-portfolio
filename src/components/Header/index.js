import React from 'react';

function Header() {
    return(
        <div>
            <nav>
                <ul class="flex flex-wrap justify-between align-center list-none pt-14 px-24 font-bold text-3xl">
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;