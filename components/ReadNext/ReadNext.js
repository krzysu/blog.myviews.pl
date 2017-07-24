import React from 'react';
import PropTypes from 'prop-types';
import PostItem from 'components/PostItem/PostItem';
import { getPublicPosts } from 'utils/helpers';
import './ReadNext.scss';

const RECOMMENDATION_COUNT = 3;

const ReadNext = ({ route, lang }) => {
    const currentPage = route.page;
    const allPages = route.pages;

    const readNextPages = getPublicPosts(allPages, lang, RECOMMENDATION_COUNT, currentPage);

    return (
        <div className="read-next">
            <h2 className="read-next__headline">Przeczytaj też:</h2>
            <div className="read-next__posts">
                {readNextPages.map((page, index) => (
                    <div key={index} className="read-next__item">
                        <PostItem page={page} headlineTag="h3" />
                    </div>
                ))}
            </div>
            <hr />
        </div>
    )
}

ReadNext.propTypes = {
    route: PropTypes.object,
    lang: PropTypes.string,
}

export default ReadNext;
