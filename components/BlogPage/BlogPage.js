import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import HeadMeta from 'components/HeadMeta';
import PostList from 'components/PostList/PostList';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import Button from 'components/Button/Button';

const bem = new BEMHelper('page');

const BlogPage = ({ route, t }) => {
    const { page, pages } = route;

    return (
        <div {...bem()}>
            <div className="wrapper">
                <HeadMeta {...page} />

                <div {...bem('header')}>
                    <h1 {...bem('title')}>{t('blogPage.title')}</h1>
                    <div {...bem('subtitle')}>{t('blogPage.subtitle')}</div>
                </div>

                <div {...bem('links')}>
                    <PostList pages={pages} />
                </div>

                <div {...bem('footer')}>
                    <div {...bem('footer-copy')}>{t('page.footer')}</div>
                    <Button href={t('urls.contact')}>{t('page.footerButton')}</Button>
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

BlogPage.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
    t: PropTypes.func,
};

export default translate()(BlogPage);
