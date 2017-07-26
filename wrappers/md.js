import React from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post/Post';

const MarkdownWrapper = (props) => {
    return (
        <Post {...props} />
    )
}

MarkdownWrapper.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  params: PropTypes.object,
  route: PropTypes.object,
  routeParams: PropTypes.object,
  routes: PropTypes.array,
}

export default MarkdownWrapper;
