import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import HeadMeta from 'components/HeadMeta';
import ReadNext from 'components/ReadNext/ReadNext';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import LikeButton from 'components/LikeButton/LikeButton';
import './Post.scss';

const Post = ({ route }) => {
    const page = route.page;
    const post = page.data;

    return (
        <div>
            <HeadMeta {...page} />
            <div className="wrapper">
                <div className="post">
                    <div className="post__published">
                        <small>{`Opublikowano ${moment(post.date).format('D MMMM YYYY')}`}</small>
                    </div>
                    <h1>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                    <hr />
                    <div className="post__like">
                        <LikeButton id={route.page.path} />
                    </div>
                </div>
            </div>

            <ReadNext route={route} />

            <div className="wrapper">
                <h2 className="read-next__headline">O autorze:</h2>
                <AuthorItem />
            </div>
        </div>
    )
}

Post.propTypes = {
  route: PropTypes.object,
}

export default Post;
