import React from 'react';
import PropTypes from 'prop-types';
import BlogIndex from 'pages/index';

const BlogIndexPl = ({ route }) => {
    return <BlogIndex lang="pl" route={route} />;
}

BlogIndexPl.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
}

export default BlogIndexPl;

export const data = {
    path: '/po-polsku/',
    lang: 'pl',
};
