import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'
import 'normalize.css/normalize.css'
import 'css/typography.css'

class Template extends React.Component {
    render () {
        const { location, children } = this.props

        return (
            <div>
                <Header location={location} />
                <div className="wrapper">
                    {children}
                </div>
            </div>
        )
    }
}

Template.propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
    route: PropTypes.object,
}

export default Template
