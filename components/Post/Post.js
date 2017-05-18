import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import ReadNext from 'components/ReadNext'
import Bio from 'components/Bio'
import Like from 'components/Like'
import './Post.css'

const Post = ({ route }) => {
    const post = route.page.data

    return (
        <div>
            <div className="post">
                <div className="post__published">
                    <small>{`Opublikowano ${moment(post.date).format('D MMMM YYYY')}`}</small>
                </div>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
                <div className="post__like">
                    <Like id={route.page.path} />
                </div>
                <hr />
            </div>
            <ReadNext post={post} pages={route.pages} />
            <Bio />
        </div>
    )
}

Post.propTypes = {
  route: PropTypes.object,
}

export default Post
