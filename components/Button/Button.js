import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './Button.scss';

const bem = new BEMHelper('button');

const Button = ({ children, style, href, external, className, styleObject }) => {
    const buttonProps = {
        className,
        style: styleObject,
        ...bem('', { alt: style === 'alt' }),
    };

    if (external) {
        const externalProps = {
            href,
            target: '_blank',
            rel: 'noopener noreferrer',
        };

        return (
            <a {...externalProps} {...buttonProps}>
                {children}
            </a>
        );
    }

    return (
        <Link to={prefixLink(href)} {...buttonProps}>
            {children}
        </Link>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    style: PropTypes.oneOf(['alt']),
    href: PropTypes.string,
    external: PropTypes.bool,
    className: PropTypes.string,
    styleObject: PropTypes.object,
};

export default Button;
