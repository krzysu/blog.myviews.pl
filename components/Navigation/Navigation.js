import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import BEMHelper from 'react-bem-helper';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import './Navigation.scss';

const bem = new BEMHelper('navigation');

const Navigation = ({ t }) => {
    const links = [
        {
            href: prefixLink(t('urls.blog')),
            label: t('navigation.blog'),
        },
        {
            href: prefixLink(t('urls.contact')),
            label: t('navigation.contact'),
        },
    ];

    return (
        <ul {...bem()}>
            {links.map((link, index) => {
                return (
                    <li key={index} {...bem('item')}>
                        <Link to={link.href} {...bem('link')}>
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

Navigation.propTypes = { t: PropTypes.func };

export default translate()(Navigation);
