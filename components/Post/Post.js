import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import HeadMeta from 'components/HeadMeta';
import ReadNext from 'components/ReadNext/ReadNext';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import LikeButton from 'components/LikeButton/LikeButton';
import PostDate from 'components/PostDate';
import './Post.scss';

const Post = ({ route, t }) => {
    const page = route.page;
    const post = page.data;

    return (
        <div>
            <HeadMeta {...page} />
            <div className="wrapper post-wrapper">
                <div className="post">
                    <div className="post__published">
                        <PostDate date={post.date} />
                    </div>
                    <h1>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
                <div className="post-actions">
                    <LikeButton page={route.page} />
                </div>
            </div>

            <ReadNext route={route} />

            <div className="wrapper">
                <div className="page__header">
                    <h2 className="page__title">{t('author')}</h2>
                </div>
                <div className="post-author-item">
                    <AuthorItem />
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    route: PropTypes.object,
    t: PropTypes.func,
};

export default translate()(Post);
