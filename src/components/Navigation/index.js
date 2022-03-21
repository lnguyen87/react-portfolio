import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

    return (
        <header>
            <nav className="bg-white text-black">
                <ul className="flex flex-wrap justify-between align-center list-none mt-6 pb-6 mx-24 font-bold text-4xl font-shalimar">
                    <h1 className="text-5xl font-windsong">
                        <a data-testid="link" href="/" className="hover:opacity-60">Luc Nguyen</a>
                    </h1>
                    <li className="ml-80">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)} className="hover:text-orange-500">About Me</a>
                    </li>
                    <li className={`hover:text-orange-500 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                        className={`mx-1 hover:text-orange-500 ${
                            currentCategory.name === category.name && !contactSelected && 'navActive'
                            }`}
                            key={category.name}
                        >
                        <span
                            onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }}
                        >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;