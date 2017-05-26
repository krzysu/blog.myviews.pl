import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import BEMHelper from 'react-bem-helper'
import access from 'safe-access'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import { getAbstract } from 'utils/helpers'
import './PostItem.scss'

const bem = new BEMHelper('post-item')

const PostItem = ({ page, headlineTag }) => {
    const title = access(page, 'data.title') || '[No title]'
    const body = getAbstract(page.data)
    const Headline = headlineTag || 'h2';

    return (
        <div {...bem()}>
            <Headline {...bem('headline')}>
                <Link to={prefixLink(page.path)} {...bem('headline-link')}>
                    {title}
                </Link>
            </Headline>
            <div {...bem('published')}>
                <small>{`Opublikowano ${moment(page.data.date).format('D MMMM YYYY')}`}</small>
            </div>
            <p {...bem('body')}>{body}</p>
        </div>
    )
}

PostItem.propTypes = {
    page: PropTypes.shape({
        path: PropTypes.string,
        data: PropTypes.object,
    }),
    headlineTag: PropTypes.string,
}

export default PostItem
