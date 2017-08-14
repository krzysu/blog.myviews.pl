import React from 'react';
import PropTypes from 'prop-types';
import GamesPage from 'components/GamesPage/GamesPage';

const GamesPl = ({ route }) => {
    return <GamesPage route={route} />;
};

GamesPl.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default GamesPl;

export const data = {
    title: 'Tworzenie gier',
    path: '/tworzenie-gier/',
    lang: 'pl',
};
