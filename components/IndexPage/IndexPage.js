import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import HeadMeta from 'components/HeadMeta';
import Intro from 'components/Intro/Intro';
import PostList from 'components/PostList/PostList';
import Button from 'components/Button/Button';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import './IndexPage.scss';

const bem = new BEMHelper('index-page');
const POST_LIMIT = 3;

const IndexPage = ({ route, t }) => {
    const { page, pages } = route;

    return (
        <div {...bem()}>
            <div className="wrapper">
                <HeadMeta {...page} />
                <Intro />
                <div {...bem('post-list')}>
                    <div className="page__header">
                        <h2 className="page__title">{t('indexPage.blogTitle')}</h2>
                    </div>

                    <PostList
                        pages={pages}
                        limit={POST_LIMIT}
                    />

                    <div {...bem('post-list-button')}>
                        <Button href={t('urls.blog')}>
                            {t('indexPage.blogButton')}
                        </Button>
                    </div>
                </div>
            </div>
            <div {...bem('author-item')}>
                <div className="wrapper">
                    <AuthorItem />
                </div>
            </div>
        </div>
    );
};

IndexPage.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
    t: PropTypes.func,
};

export default translate()(IndexPage);
