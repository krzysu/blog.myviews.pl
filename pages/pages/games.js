import React from 'react';
import PropTypes from 'prop-types';
import GamesPage from 'components/GamesPage/GamesPage';

const Games = ({ route }) => {
    return <GamesPage route={route} />;
};

Games.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default Games;

export const data = {
    title: 'Games',
    path: '/games/',
    lang: 'en',
};
