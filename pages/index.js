import React from 'react';
import PropTypes from 'prop-types';
import HeadMeta from 'components/HeadMeta';
import Intro from 'components/Intro/Intro';
import PostItem from 'components/PostItem/PostItem';
import { getPublicPosts } from 'utils/helpers';

const BlogIndex = ({ route, lang }) => {
    const { page, pages } = route;
    const publicPages = getPublicPosts(pages, lang);

    return (
        <div className="wrapper">
            <HeadMeta {...page} />
            <Intro />
            <div style={{ paddingTop: '4.5em' }}>
                {publicPages.map((publicPage, index) => {
                    return (
                        <div key={index} style={{ marginBottom: '3em' }}>
                            <PostItem page={publicPage} />
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

BlogIndex.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
    lang: PropTypes.string,
};

export default BlogIndex;

export const data = { lang: 'en' };
