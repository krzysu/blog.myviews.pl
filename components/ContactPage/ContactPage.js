import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import HeadMeta from 'components/HeadMeta';
import LinkList from 'components/LinkList/LinkList';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import { getEmail } from 'utils/helpers';
import './ContactPage.scss';

const bem = new BEMHelper('contact-page');

const ContactPage = ({ route, t }) => {
    const { page } = route;

    const contactLinks = [
        {
            href: `mailto:${getEmail()}`,
            primary: 'email',
            secondary: getEmail(),
        },
        {
            href: 'https://twitter.com/krzysu',
            primary: 'twitter',
            secondary: '@krzysu',
            external: true,
        },
        {
            href: 'https://www.linkedin.com/in/krzysu/',
            primary: 'linkedIn',
            secondary: 'Kris Urbas',
            external: true,
        },
    ];

    return (
        <div>
            <div className="wrapper">
                <HeadMeta {...page} />

                <div {...bem('header')}>
                    <h1 {...bem('title')}>{t('contactPage.title')}</h1>
                    <div>{t('contactPage.subtitle')}</div>
                </div>

                <div {...bem('links')}>
                    <LinkList links={contactLinks} />
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

ContactPage.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
    t: PropTypes.func,
};

export default translate()(ContactPage);
