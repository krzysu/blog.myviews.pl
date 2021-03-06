import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import { getEmail } from 'utils/helpers';
import HeadMeta from 'components/HeadMeta';
import LinkList from 'components/LinkList/LinkList';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import ShareButtons from 'components/ShareButtons';

const bem = new BEMHelper('page'); // global styles

const ContactPage = ({ route, t }) => {
    const { page } = route;

    const contactLinks = [
        {
            href: `mailto:${getEmail()}`,
            primary: 'email',
            secondary: getEmail(),
            icon: 'mail',
        },
        {
            href: 'https://twitter.com/krzysu',
            primary: 'twitter',
            secondary: '@krzysu',
            icon: 'twitter',
            external: true,
        },
        {
            href: 'https://www.linkedin.com/in/krzysu/',
            primary: 'linkedIn',
            secondary: 'Kris Urbas',
            icon: 'vcard',
            external: true,
        },
    ];

    return (
        <div {...bem()}>
            <div className="wrapper">
                <HeadMeta {...page} />

                <div {...bem('header')}>
                    <h1 {...bem('title')}>{t('contactPage.title')}</h1>
                    <div {...bem('subtitle')}>{t('contactPage.subtitle')}</div>
                </div>

                <div {...bem('links')}>
                    <LinkList links={contactLinks} />
                </div>

                <div {...bem('footer')}>
                    <div {...bem('footer-copy')}>{t('contactPage.footer')}</div>
                    <ShareButtons />
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
