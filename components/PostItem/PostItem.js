import React from 'react'
import PropTypes from 'prop-types'
import BEMHelper from 'react-bem-helper'
import access from 'safe-access'
import prune from 'underscore.string/prune'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import Button from 'components/Button'
import './PostItem.css'

const bem = new BEMHelper('post-item')

const PostItem = ({ page }) => {
    const title = access(page, 'data.title') || '[No title]'
    const html = access(page, 'data.description') || page.data.body
    const body = prune(html.replace(/<[^>]*>/g, ''), 200)

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