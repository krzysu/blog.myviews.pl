import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import BEMHelper from 'react-bem-helper';
import { prefixLink } from 'gatsby-helpers';
import './Footer.scss';

const bem = new BEMHelper('footer');

const Footer = ({ t, i18n }) => {
    const linksLeft = [
        {
            href: 'https://twitter.com/krzysu',
            label: 'Twitter',
        },
        {
            href: 'https://github.com/krzysu',
            label: 'GitHub',
        },
        {
            href: 'https://www.linkedin.com/in/krzysu/',
            label: 'LinkedIn',
        },
        {
            href: 'https://soundcloud.com/krzysu',
            label: 'SoundCloud',
        },
    ];

    const linksRight = [
        {
            href: prefixLink(t('urls.homepage')),
            label: t('navigation.homepage'),
        },
        {
            href: prefixLink(t('urls.games')),
            label: t('navigation.games'),
        },
        {
            href: prefixLink(t('urls.contact')),
            label: t('navigation.contact'),
        },
        {
            href: i18n.language === 'en' ? prefixLink('/po-polsku/') : prefixLink('/'),
            label: i18n.language === 'en' ? 'Po polsku' : 'English',
        },
    ];

    return (
        <div {...bem()}>
            <div className="wrapper">
                <div {...bem('menu')}>
                    <ul {...bem('list')}>
                        {linksLeft.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" {...bem('link')}>
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <ul {...bem('list')}>
                        {linksRight.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.href} {...bem('link')}>
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <small {...bem('copyright')}>
                    {`copyright © ${(new Date()).getFullYear()} Kris Urbas @krzysu`}
                </small>
            </div>
        </div>
    );
};

Footer.propTypes = {
    t: PropTypes.func,
    i18n: PropTypes.object,
};

export default translate()(Footer);
