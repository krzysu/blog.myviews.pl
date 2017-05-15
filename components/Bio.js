import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
      return null;
    return (
      <p>
        <img
          src={prefixLink('/static/img/profile-pic.jpg')}
          alt={`author ${config.authorName}`}
          width="46"
          height="46"
        />
        Written by <strong>{config.authorName}</strong>
      </p>
    )
  }
}

export default Bio
