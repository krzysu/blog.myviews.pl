import React from 'react';
import PropTypes from 'prop-types';
import HeadMeta from 'components/HeadMeta';
import ReadNext from 'components/ReadNext/ReadNext';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import LikeButton from 'components/LikeButton/LikeButton';
import PostDate from 'components/PostDate';
import './Post.scss';

const Post = ({ route }) => {
    const page = route.page;
    const post = page.data;

    return (
        <div>
            <HeadMeta {...page} />
            <div className="wrapper post-wrapper">
                <div className="post">
                    <div className="post__published">
                        <PostDate date={post.date} lang={post.lang} />
                    </div>
                    <h1>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
                <div className="post-actions">
                    <LikeButton id={route.page.path} lang={post.lang} />
                </div>
                <hr />
            </div>

            <ReadNext route={route} lang={post.lang} />

            <div className="wrapper">
                <h2>O autorze:</h2>
                <AuthorItem />
            </div>
        </div>
    )
}

Post.propTypes = {
  route: PropTypes.object,
}

export default Post;
