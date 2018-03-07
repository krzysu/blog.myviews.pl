import React from 'react';
import PropTypes from 'prop-types';
import OfferPage from 'components/OfferPage/OfferPage';

const OfferPl = ({ route }) => {
    return <OfferPage route={route} />;
};

OfferPl.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default OfferPl;

export const data = {
    title: 'Współpraca',
    path: '/wspolpraca/',
    lang: 'pl',
};
