import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import HeadMeta from 'components/HeadMeta';
import PostList from 'components/PostList/PostList';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import './BlogPage.scss';

const bem = new BEMHelper('blog-page');

const BlogPage = ({ route, t }) => {
    const { page, pages } = route;

    return (
        <div {...bem()}>
            <div className="wrapper">
                <HeadMeta {...page} />
                <h1>{t('blogPage.title')}</h1>
                <div {...bem('post-list')}>
                    <PostList pages={pages} />
                </div>
            </div>
            <div {...bem('author-item')}>
                <div className="wrapper">
                    <AuthorItem />
                </div>
            </div>
        </div>
    );
};

BlogPage.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
    t: PropTypes.func,
};

export default translate()(BlogPage);
