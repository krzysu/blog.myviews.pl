import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import HeadMeta from 'components/HeadMeta';
import LinkList from 'components/LinkList/LinkList';
import AuthorItem from 'components/AuthorItem/AuthorItem';
import Button from 'components/Button/Button';

const bem = new BEMHelper('page');

const GamesPage = ({ route, t }) => {
    const { page } = route;

    const links = [
        {
            href: 'https://sokoban-player.netlify.com/',
            primary: 'Sokoban Player',
            secondary: 'play any Sokoban level you want!',
            icon: 'rocket',
            external: true,
        },
        {
            href: 'https://heal-em-all-game.netlify.com/',
            primary: 'Heal\'em All. There\'s a Cure for Zombies',
            secondary: t('gamesPage.zombieSubtitle'),
            icon: 'rocket',
            external: true,
        },
        {
            href: 'https://another-breakout-game.netlify.com/',
            primary: 'Another Breakout',
            secondary: t('gamesPage.breakoutSubtitle'),
            icon: 'rocket',
            external: true,
        },
        {
            href: 'https://indie-html5-game-dev-slides.netlify.com/',
            primary: 'Indie HTML5 Game Development: Lessons Learned',
            secondary: t('gamesPage.slidesSubtitle'),
            icon: 'newspaper',
            external: true,
        },
    ];

    return (
        <div {...bem()}>
            <div className="wrapper">
                <HeadMeta {...page} />

                <div {...bem('header')}>
                    <h1 {...bem('title')}>{t('gamesPage.title')}</h1>
                    <div {...bem('subtitle')}>{t('gamesPage.subtitle')}</div>
                </div>

                <div {...bem('links')}>
                    <LinkList links={links} />
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

GamesPage.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
    t: PropTypes.func,
};

export default translate()(GamesPage);
