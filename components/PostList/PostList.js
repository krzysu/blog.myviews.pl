import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import PostItem from 'components/PostItem/PostItem';
import { getPublicPosts } from 'utils/helpers';
import './PostList.scss';

const bem = new BEMHelper('post-list');

const PostList = ({ pages, i18n, limit }) => {
    const publicPages = getPublicPosts(pages, i18n.language, limit);

    return (
        <div {...bem()}>
            {publicPages.map((publicPage, index) => {
                return (
                    <div key={index} {...bem('item')}>
                        <PostItem page={publicPage} />
                        <hr {...bem('separator')} />
                    </div>
                );
            })}
        </div>
    );
};

PostList.propTypes = {
    pages: PropTypes.array,
    i18n: PropTypes.object,
    limit: PropTypes.number,
};

export default translate()(PostList);
