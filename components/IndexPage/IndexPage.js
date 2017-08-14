import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import HeadMeta from 'components/HeadMeta';
import Intro from 'components/Intro/Intro';
import PostItem from 'components/PostItem/PostItem';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import { getPublicPosts } from 'utils/helpers';
import './IndexPage.scss';

const bem = new BEMHelper('index-page');

const IndexPage = ({ route, lang }) => {
    const { page, pages } = route;
    const publicPages = getPublicPosts(pages, lang);

    return (
        <div {...bem()}>
            <div className="wrapper">
                <HeadMeta {...page} />
                <Intro />
                <i className="icon-twitter"></i>
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

IndexPage.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
    lang: PropTypes.string,
};

export default IndexPage;
