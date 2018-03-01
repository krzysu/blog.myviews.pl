import React from 'react';
import PropTypes from 'prop-types';
import OfferPage from 'components/OfferPage/OfferPage';

const Offer = ({ route }) => {
    return <OfferPage route={route} />;
};

Offer.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default Offer;

export const data = {
    title: 'Consultancy',
    path: '/consultancy/',
    lang: 'en',
};
