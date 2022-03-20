import React from 'react';

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    return (
        <header>
            <nav className="bg-white text-black">
                <ul className="flex flex-wrap justify-between align-center list-none pt-6 pb-6 px-24 font-bold text-2xl">
                    <h1 className="text-4xl font-bold">
                        <a data-testid="link" href="/">Luc Nguyen</a>
                    </h1>
                    <li className="pl-80">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)} className="hover:text-orange-500">About Me</a>
                    </li>
                    <li className={`${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                        className={`mx-1 ${
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
                        </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;