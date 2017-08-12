import React from 'react';
import PropTypes from 'prop-types';
import IndexPage from 'components/IndexPage/IndexPage';

const BlogIndexPl = ({ route }) => {
    return <IndexPage lang="pl" route={route} />;
};

BlogIndexPl.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default BlogIndexPl;

export const data = {
    path: '/po-polsku/',
    lang: 'pl',
};
