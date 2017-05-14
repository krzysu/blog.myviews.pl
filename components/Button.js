import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './Button.css'

const Button = ({ path, text }) => {
    return (
        <Link to={prefixLink(path)} className="button">
            {text}
        </Link>
    )
}

Button.PropTypes = {
    path: PropTypes.string,
    text: PropTypes.string,
}

export default Button
