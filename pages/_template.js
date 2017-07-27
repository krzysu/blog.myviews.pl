import React from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import i18n from 'utils/i18n';
import TemplateI18n from './_template_i18n';
import { prefixLink } from 'gatsby-helpers';
import 'normalize.css/normalize.css';
import 'stylesheets/typography.scss';

const Template = (props) => {
    const currentPage = props.route.pages.find((page) => {
        return prefixLink(page.path) === props.location.pathname
    });

    return (
        <I18nextProvider i18n={i18n} initialLanguage={currentPage.data.lang}>
            <TemplateI18n {...props} />
        </I18nextProvider>
    );
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
