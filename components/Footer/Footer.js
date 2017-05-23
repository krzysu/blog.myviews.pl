import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                copyright, license, contact etc.
            </div>
        </div>
    )
}

export default Footer;
