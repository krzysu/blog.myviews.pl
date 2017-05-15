import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

const Header = ({ location }) => {
    if (location.pathname === prefixLink('/')) {
        return (
            <h1>
                <Link to={prefixLink('/')}>
                    {config.blogTitle}
                </Link>
            </h1>
        )
    } else {
        return (
            <h3>
                <Link to={prefixLink('/')}>
                    {config.blogTitle}
                </Link>
            </h3>
        )
    }
}

Header.propTypes = {
  location: PropTypes.object,
}

export default Header
