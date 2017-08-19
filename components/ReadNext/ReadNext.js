import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import BEMHelper from 'react-bem-helper';
import PostItem from 'components/PostItem/PostItem';
import { getPublicPosts } from 'utils/helpers';
import './ReadNext.scss';

const bem = new BEMHelper('read-next');
const RECOMMENDATION_COUNT = 3;

const ReadNext = ({ route, t, i18n }) => {
    const currentPage = route.page;
    const allPages = route.pages;

    const readNextPages = getPublicPosts(allPages, i18n.language, RECOMMENDATION_COUNT, currentPage);

    return (
        <div {...bem()}>
            <div className="page__header">
                <h2 className="page__title">{t('readAlso')}</h2>
            </div>
            <div {...bem('posts')}>
                {readNextPages.map((page, index) => {
                    return (
                        <div key={index} {...bem('item')}>
                            <PostItem page={page} headlineTag="h3" />
                            <hr {...bem('line-on-small-screen')}/>
                        </div>
                    );
                })}
            </div>
            <hr {...bem('line-on-big-screen')}/>
        </div>
    );
};

ReadNext.propTypes = {
    route: PropTypes.object,
    t: PropTypes.func,
    i18n: PropTypes.object,
};

export default translate()(ReadNext);
