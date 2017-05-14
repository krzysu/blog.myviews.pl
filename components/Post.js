import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import ReadNext from 'components/ReadNext'
import { rhythm } from 'utils/typography'
import Bio from 'components/Bio'

const Post = ({ route }) => {
    const post = route.page.data

    return (
        <div className="markdown">
            <h1 style={{marginTop: 0}}>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <em
                style={{
                    display: 'block',
                    marginBottom: rhythm(2),
                }}
            >
                Posted {moment(post.date).format('MMMM D, YYYY')}
            </em>
            <hr
                style={{
                    marginBottom: rhythm(2),
                }}
            />
            <ReadNext post={post} pages={route.pages} />
            <Bio />
        </div>
    )
}

Post.propTypes = {
  route: PropTypes.object,
}

export default Post
