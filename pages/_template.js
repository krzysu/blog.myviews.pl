import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-responsive-grid'
import Header from 'components/Header'
import 'css/typography.css'

class Template extends React.Component {
  render () {
    const { location, children } = this.props

    return (
      <Container>
        <Header location={location} />
        {children}
      </Container>
    )
  }
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Template
