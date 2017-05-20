import React from 'react'
import PropTypes from 'prop-types'
import BEMHelper from 'react-bem-helper'
import access from 'safe-access'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import { getAbstract } from 'utils/helpers'
import Button from 'components/Button'
import './PostItem.css'

const bem = new BEMHelper('post-item')

const PostItem = ({ page }) => {
    const title = access(page, 'data.title') || '[No title]'
    const body = getAbstract(page.data)

    // <Button path={page.path} text="Otwórz" />

    return (
        <div {...bem()}>
            <h2 {...bem('headline')}>
                <Link to={prefixLink(page.path)} {...bem('headline-link')}>
                    {title}
                </Link>
            </h2>
            <p {...bem('body')}>{body}</p>
            <hr />
        </div>
    )
}

PostItem.propTypes = {
  page: PropTypes.shape({
      path: PropTypes.string,
      data: PropTypes.object,
  }),
}

export default PostItem
