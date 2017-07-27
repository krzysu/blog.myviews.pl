import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './Header.scss';

const Header = ({ location, i18n }) => {
    const isHomePage = location.pathname === prefixLink('/');
    const languageSwitch = i18n.language === 'en' ?
        <Link to={prefixLink('/po-polsku/')} className="header__title-link">po polsku</Link> :
        <Link to={prefixLink('/')} className="header__title-link">english</Link>;

    return (
        <div className="header">
            <div className="wrapper">
                <div className="header__inner">
                    {!isHomePage && (
                        <Link to={prefixLink('/')} className="header__title-link">
                            more than <strong>web developer</strong>
                        </Link>
                    )}

                    {isHomePage && (
                        <span className="header__title">
                            Hi, my name is <strong>Kris Urbas</strong>
                        </span>
                    )}

                    {languageSwitch}
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    location: PropTypes.object,
    i18n: PropTypes.object,
}

export default translate()(Header);
