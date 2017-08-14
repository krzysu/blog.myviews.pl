import React from 'react';
import PropTypes from 'prop-types';
import ContactPage from 'components/ContactPage/ContactPage';

const Contact = ({ route }) => {
    return <ContactPage route={route} />;
};

Contact.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default Contact;

export const data = {
    title: 'Contact',
    path: '/contact/',
    lang: 'en',
};
