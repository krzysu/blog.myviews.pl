import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import HeadMeta from 'components/HeadMeta';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import Button from 'components/Button/Button';

const bem = new BEMHelper('page'); // global styles

const OfferPage = ({ route, t }) => {
    const { page } = route;

    return (
        <div {...bem()}>
            <HeadMeta {...page} />
            <div className="wrapper">
                <div {...bem('header')}>
                    <h1 {...bem('title')}>Are you happy with your software development?</h1>
                    <div {...bem('subtitle')}>How important is healthy software for your business?</div>
                </div>
            </div>

            <div className="wrapper wrapper--wide">
                <div className="page__header">
                    <h2 className="page__title">My offer will be here soon!</h2>
                </div>
                <div className="grid">
                    <div className="grid__item">
                        1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt tincidunt felis eget feugiat.
                    </div>
                    <div className="grid__item">
                        2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt tincidunt felis eget feugiat.
                    </div>
                    <div className="grid__item">
                        3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt tincidunt felis eget feugiat.
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div {...bem('footer')}>
                    <div {...bem('footer-copy')}>Do you want to know more?</div>
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

OfferPage.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
    t: PropTypes.func,
};

export default translate()(OfferPage);
