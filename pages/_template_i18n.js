import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { getCurrentPage } from 'utils/helpers';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

class TemplateI18n extends Component {
    componentWillUpdate(nextProps) {
        const { route, location } = nextProps;
        const currentPage = getCurrentPage(route.pages, location);

        if (currentPage.data.lang !== this.props.i18n.language) {
            this.props.i18n.changeLanguage(currentPage.data.lang);
        }
    }

    render() {
        const { location, children } = this.props;

        return (
            <div>
                <Header location={location} />
                <div className="body">{children}</div>
                <Footer />
            </div>
        );
    }
}

TemplateI18n.propTypes = {
    children: PropTypes.any,
    history: PropTypes.object,
    location: PropTypes.object,
    params: PropTypes.object,
    route: PropTypes.object,
    routeParams: PropTypes.object,
    routes: PropTypes.array,
    i18n: PropTypes.shape({
        language: PropTypes.string,
        changeLanguage: PropTypes.func,
    }),
};

export default translate()(TemplateI18n);
