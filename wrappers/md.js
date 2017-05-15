import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { config } from 'config'
import Post from 'components/Post/Post'
import '../css/zenburn.css'

const MarkdownWrapper = (props) => {
    const { route } = props;
    const post = route.page.data;
    const layout = post.layout;

    return (
        <div>
            <Helmet
                title={`${post.title} | ${config.blogTitle}`}
            />
            <Post {...props} />
        </div>
    )
}

MarkdownWrapper.propTypes = {
  route: PropTypes.object,
}

export default MarkdownWrapper
