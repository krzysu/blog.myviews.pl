import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import HeadMeta from 'components/HeadMeta';
import PostItem from 'components/PostItem/PostItem';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import { getPublicPosts } from 'utils/helpers';
import './BlogPage.scss';

const bem = new BEMHelper('blog-page');

const BlogPage = ({ route, t, i18n }) => {
    const { page, pages } = route;
    const publicPages = getPublicPosts(pages, i18n.language);

    return (
        <div {...bem()}>
            <div className="wrapper">
                <HeadMeta {...page} />
                <h1>{t('blogPage.title')}</h1>
                <div {...bem('post-list')}>
                    {publicPages.map((publicPage, index) => {
                        return (
                            <div key={index} {...bem('post-item')}>
                                <PostItem page={publicPage} />
                                <hr />
                            </div>
                        );
                    })}
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
    i18n: PropTypes.object,
};

export default translate()(BlogPage);
