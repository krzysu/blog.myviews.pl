import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import HeadMeta from 'components/HeadMeta';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import Button from 'components/Button/Button';
import './OfferPage.scss';

const pageBem = new BEMHelper('page');
const offerBem = new BEMHelper('offer-page');

const OfferPage = ({ route, t, i18n }) => {
    const { page } = route;

    return (
        <div className="page offer-page">
            <HeadMeta {...page} />

            {i18n.language === 'en' && (
                <div className="wrapper wrapper--wide">
                    <div {...pageBem('header')}>
                        <h1 {...pageBem('title')}>Are you happy with your software development?</h1>
                        <div {...pageBem('subtitle')}>How important is healthy software for your business?</div>
                    </div>

                    <div className="grid">
                        <div className="grid__item">
                            <h4>
                                Does your business suffer because of software issues?
                            </h4>
                            <p>Software related problems:</p>
                            <ul>
                                <li>hard to maintain code base</li>
                                <li>never-ending bugs and constant firefighting</li>
                                <li>slow progress with new features</li>
                                <li>features never delivered on time</li>
                            </ul>
                        </div>
                        <div className="grid__item">
                            <h4>
                                Do your people bring value to your company, even if you are not in the office?
                            </h4>
                            <p>People related problems:</p>
                            <ul>
                                <li>low motivation</li>
                                <li>high employee churn rate</li>
                                <li>lack of self-development</li>
                                <li>hiring wrong people</li>
                            </ul>
                        </div>
                        <div className="grid__item">
                            <h4>
                                Do you know what you really want to build and how to bring value to your users?
                            </h4>
                            <p>Management related problems:</p>
                            <ul>
                                <li>too big expectations</li>
                                <li>lack of understanding of software development processes</li>
                                <li>lack of trust in your people</li>
                                <li>time and money wasted on unnecessary projects</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
            )}

            <div className="wrapper wrapper--wide">
                <div {...pageBem('header')}>
                    <h1 {...pageBem('title')}>{t('offerPage.section2.title')}</h1>
                </div>
                <h4 {...offerBem('above-grid-headline')}>{t('offerPage.section2.subtitle1')}</h4>
                <div className="grid">
                    <div className="grid__item">
                        <p>
                            <span {...offerBem('counter')}>1.</span>
                            {t('offerPage.section2.point1')}
                        </p>
                    </div>
                    <div className="grid__item">
                        <p>
                            <span {...offerBem('counter')}>2.</span>
                            {t('offerPage.section2.point2')}
                        </p>
                    </div>
                    <div className="grid__item">
                        <p>
                            <span {...offerBem('counter')}>3.</span>
                            {t('offerPage.section2.point3')}
                        </p>
                    </div>
                </div>
                <h4 {...offerBem('above-grid-headline')}>{t('offerPage.section2.subtitle2')}</h4>
                <div className="grid">
                    <div className="grid__item">
                        <p>
                            <span {...offerBem('counter')}>4.</span>
                            {t('offerPage.section2.point4')}
                        </p>
                    </div>
                    <div className="grid__item">
                        <p>
                            <span {...offerBem('counter')}>5.</span>
                            {t('offerPage.section2.point5')}
                        </p>
                    </div>
                    <div className="grid__item">
                        <p>
                            <span {...offerBem('counter')}>6.</span>
                            {t('offerPage.section2.point6')}
                        </p>
                    </div>
                </div>
                <hr />
            </div>

            <div className="wrapper">
                <div {...pageBem('footer')}>
                    <div {...pageBem('footer-copy')}>{t('offerPage.footer')}</div>
                    <Button href={t('urls.contact')}>{t('page.footerButton')}</Button>
                </div>
            </div>

            <div {...pageBem('author-item')}>
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
    i18n: PropTypes.object,
};

export default translate()(OfferPage);
