import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'

const Header = ({ location }) => {
    if (location.pathname === prefixLink('/')) {
        return (
            <h1
                style={{
                    ...scale(1.5),
                    marginBottom: rhythm(1.5),
                    marginTop: 0,
                }}
            >
                <Link
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    to={prefixLink('/')}
                >
                    {config.blogTitle}
                </Link>
            </h1>
        )
    } else {
        return (
            <h3
                style={{
                    fontFamily: 'Montserrat, sans-serif',
                    marginTop: 0,
                }}
            >
                <Link
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    to={prefixLink('/')}
                >
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
