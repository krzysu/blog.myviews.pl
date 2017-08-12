import React from 'react';
import PropTypes from 'prop-types';
import IndexPage from 'components/IndexPage/IndexPage';

const BlogIndex = ({ route }) => {
    return <IndexPage lang="en" route={route} />;
};

BlogIndex.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default BlogIndex;

export const data = { lang: 'en' };
