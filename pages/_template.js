import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-responsive-grid'
import { rhythm } from 'utils/typography'
import Header from 'components/Header'

class Template extends React.Component {
  render () {
    const { location, children } = this.props

    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
        }}
      >
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
