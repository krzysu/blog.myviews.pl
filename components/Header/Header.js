import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './Header.scss';

const Header = ({ location, currentPage, i18n }) => {
    const isEnglishHomePage = location.pathname === prefixLink('/');
    const isPolishHomePage = location.pathname === prefixLink('/po-polsku/');
    const isPolishPage = currentPage.data.lang === 'pl';
    const isEnglishPage = currentPage.data.lang === 'en';

    const languageSwitch = i18n.language === 'en' ?
        <Link to={prefixLink('/po-polsku/')} className="header__link">po polsku</Link> :
        <Link to={prefixLink('/')} className="header__link">english</Link>;

    return (
        <div className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <div>
                        {(isEnglishPage && !isEnglishHomePage) && (
                            <Link to={prefixLink('/')} className="header__link">
                                more than <strong>web developer</strong>
                            </Link>
                        )}

                        {(isPolishPage && !isPolishHomePage) && (
                            <Link to={prefixLink('/po-polsku/')} className="header__link">
                                more than <strong>web developer</strong>
                            </Link>
                        )}
                    </div>

                    {languageSwitch}
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    location: PropTypes.object,
    currentPage: PropTypes.object,
    i18n: PropTypes.object,
}

export default translate()(Header);
