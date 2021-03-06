import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import get from 'lodash/get';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router';
import { getAbstract } from 'utils/helpers';
import PostDate from 'components/PostDate';
import './PostItem.scss';

const bem = new BEMHelper('post-item');

const PostItem = ({ page, headlineTag }) => {
    const title = get(page, 'data.title') || '[No title]';
    const body = getAbstract(page.data);
    const Headline = headlineTag || 'h2';

    return (
        <div {...bem()}>
            <Headline {...bem('headline')}>
                <Link to={prefixLink(page.path)} {...bem('headline-link')}>
                    {title}
                </Link>
            </Headline>
            <div {...bem('published')}>
                <PostDate date={page.data.date} />
            </div>
            <p {...bem('body')}>{body}</p>
        </div>
    );
};

PostItem.propTypes = {
    page: PropTypes.shape({
        path: PropTypes.string,
        data: PropTypes.object,
    }),
    headlineTag: PropTypes.string,
};

export default PostItem;
