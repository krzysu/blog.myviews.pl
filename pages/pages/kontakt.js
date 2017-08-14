import React from 'react';
import PropTypes from 'prop-types';
import ContactPage from 'components/ContactPage/ContactPage';

const ContactPl = ({ route }) => {
    return <ContactPage route={route} />;
};

ContactPl.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default ContactPl;

export const data = {
    title: 'Kontakt',
    path: '/kontakt/',
    lang: 'pl',
};
