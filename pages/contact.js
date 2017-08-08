import React from 'react';
import PropTypes from 'prop-types';
import HeadMeta from 'components/HeadMeta';

const Contact = ({ route }) => {
    const { page } = route;

    return (
        <div className="wrapper">
            <HeadMeta {...page} />
            contact
        </div>
    );
};

Contact.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default Contact;

export const data = {
    path: '/contact/',
    lang: 'en',
};
