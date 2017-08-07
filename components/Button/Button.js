import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import './Button.scss';

const bem = new BEMHelper('button');

const Button = ({ children, style, href }) => {
    return (
        <a href={href || '#'} {...bem('', { alt: style === 'alt' })}>
            {children}
        </a>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    style: PropTypes.oneOf(['alt']),
    href: PropTypes.string,
};

export default Button;
