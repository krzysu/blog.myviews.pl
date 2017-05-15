import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './Header.css'

const Header = ({ location }) => {
    const isHomePage = location.pathname === prefixLink('/');

    return (
        <div className="header">
            <div className="wrapper">
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
            </div>
        </div>
    )
}

Header.propTypes = {
    location: PropTypes.object,
}

export default Header
