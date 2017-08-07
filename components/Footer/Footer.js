import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                {`copyright © ${(new Date()).getFullYear()} Kris Urbas @krzysu`}
            </div>
        </div>
    );
};

export default Footer;
