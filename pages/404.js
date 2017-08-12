import React from 'react';
import PropTypes from 'prop-types';
import { prefixLink } from 'gatsby-helpers';
import Button from 'components/Button/Button';
import AuthorItem from 'components/AuthorItem/AuthorItem';

const Page404 = ({ route }) => {
    return (
        <div className="wrapper">
            <div
                style={{
                    margin: '9em 0 12em',
                    textAlign: 'center',
                }}
            >
                <h1>404 - page not found</h1>
                <Button href={prefixLink('/')}>back to home</Button>
            </div>
            <AuthorItem />
        </div>
    );
};

Page404.propTypes = {
    route: PropTypes.shape({
        page: PropTypes.object,
        pages: PropTypes.array,
    }),
};

export default Page404;

export const data = {
    path: '/404.html',
    lang: 'en',
};
