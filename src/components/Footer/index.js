import React from 'react';

const Footer = () => {
    // React.createElement
    return(
        <div className="pt-24 px-24 text-cyan-500 font-bold">
            <div className="flex flex-wrap justify-between align-right">
            <p>Phone: <a href="tel:801-915-7316" className="hover:text-purple-600"> 801-915-7316</a></p>

            <p>
            Email:
            <a href="mailto:luc_nguyen@outlook.com" className="hover:text-purple-600"> luc_nguyen@outlook.com</a>
            </p>

            <p><a href="https://www.github.com/lnguyen87" target="_blank" className="hover:text-purple-600">Github</a></p>

            <p><a href="https://www.linkedin.com/in/luctnguyen" target="_blank" className="hover:text-purple-600">LinkedIn</a></p>
            </div>
        </div>
    );
}

export default Footer;