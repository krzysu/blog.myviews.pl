import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import 'normalize.css/normalize.css'
import 'css/typography.css'

class Template extends React.Component {
    render () {
        const { location, children } = this.props

        return (
            <div className="template">
                <Header location={location} />
                {children}
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
