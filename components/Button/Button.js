import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './Button.scss';

const bem = new BEMHelper('button');

const Button = ({ children, style, href, external }) => {
    const path = external ? href : prefixLink(href);

    return (
        <Link to={path} {...bem('', { alt: style === 'alt' })}>
            {children}
        </Link>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    style: PropTypes.oneOf(['alt']),
    href: PropTypes.string,
    external: PropTypes.bool,
};

export default Button;
