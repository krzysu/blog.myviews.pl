import React from 'react';
import PropTypes from 'prop-types';
import HeadMeta from 'components/HeadMeta';
import LinkList from 'components/LinkList/LinkList';
import { getEmail } from 'utils/helpers';

const Contact = ({ route }) => {
    const { page } = route;

    const contactLinks = [
        {
            href: `mailto:${getEmail()}`,
            primary: 'by email',
            secondary: getEmail(),
        },
        {
            href: 'https://twitter.com/krzysu',
            primary: 'by twitter',
            secondary: '@krzysu',
            external: true,
        },
        {
            href: 'https://www.meetup.com/Node-js-Meetup-Berlin/members/76771952/',
            primary: 'or let\'s meet',
            secondary: 'in Berlin, Germany',
            external: true,
        },
    ];

    return (
        <div className="wrapper">
            <HeadMeta {...page} />

            <LinkList links={contactLinks} />
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
