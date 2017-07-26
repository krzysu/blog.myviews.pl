import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './Header.scss';

const Header = ({ location, lang }) => {
    const isHomePage = location.pathname === prefixLink('/');

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

                    <Link to={prefixLink('/po-polsku/')} className="header__title-link">PL</Link>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    location: PropTypes.object,
    lang: PropTypes.string,
}

export default Header
