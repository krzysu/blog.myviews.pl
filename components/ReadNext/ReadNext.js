import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import PostItem from 'components/PostItem/PostItem';
import { getPublicPosts } from 'utils/helpers';
import './ReadNext.scss';

const RECOMMENDATION_COUNT = 3;

const ReadNext = ({ route, t, i18n }) => {
    const currentPage = route.page;
    const allPages = route.pages;

    const readNextPages = getPublicPosts(allPages, i18n.language, RECOMMENDATION_COUNT, currentPage);

    return (
        <div className="read-next">
            <h2 className="read-next__headline">{`${t('readAlso')}:`}</h2>
            <div className="read-next__posts">
                {readNextPages.map((page, index) => {
                    return (
                        <div key={index} className="read-next__item">
                            <PostItem page={page} headlineTag="h3" />
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

ReadNext.propTypes = {
    route: PropTypes.object,
    t: PropTypes.func,
    i18n: PropTypes.object,
};

export default translate()(ReadNext);
