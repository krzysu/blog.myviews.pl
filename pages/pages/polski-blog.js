import React from 'react';
import PropTypes from 'prop-types';
import BlogPage from 'components/BlogPage/BlogPage';

const Blog = ({ route }) => {
    return <BlogPage route={route} />;
};

Blog.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default Blog;

export const data = {
    title: 'Blog',
    path: '/polski-blog/',
    lang: 'pl',
};
