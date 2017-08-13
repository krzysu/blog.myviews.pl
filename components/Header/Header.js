import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './Header.scss';

const Header = ({ location, i18n, t }) => {
    const isNotHomePage = location.pathname !== prefixLink('/') &&
        location.pathname !== prefixLink('/po-polsku/');

    const languageSwitch = i18n.language === 'en' ?
        <Link to={prefixLink('/po-polsku/')} className="header__link">po polsku</Link> :
        <Link to={prefixLink('/')} className="header__link">english</Link>;

    return (
        <div className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <div>
                        {isNotHomePage && (
                            <Link to={prefixLink(t('urls.homepage'))} className="header__link">
                                more than <strong>web developer</strong>
                            </Link>
                        )}
                    </div>

                    {languageSwitch}
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    location: PropTypes.object,
    i18n: PropTypes.object,
    t: PropTypes.func,
};

export default translate()(Header);
