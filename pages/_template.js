import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import 'normalize.css/normalize.css';
import 'css/typography.css';

const Template = ({ location, children }) => {
    return (
        <div>
            <Header location={location} />
            {children}
            <Footer />
        </div>
    )
}

Template.propTypes = {
    children: PropTypes.any,
    history: PropTypes.object,
    location: PropTypes.object,
    params: PropTypes.object,
    route: PropTypes.object,
    routeParams: PropTypes.object,
    routes: PropTypes.array,
}

export default Template;
