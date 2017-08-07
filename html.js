import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

const Html = ({ body }) => {
    const head = Helmet.rewind();

    // eslint-disable-next-line no-process-env
    const css = process.env.NODE_ENV === 'production' ?
        // eslint-disable-next-line global-require
        <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} /> :
        null;

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://fonts.googleapis.com/css?family=Lato|Merriweather:400,900" rel="stylesheet" />
                {head.title.toComponent()}
                {head.meta.toComponent()}
                {css}
            </head>
            <body>
                <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
                <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
            </body>
        </html>
    );
};

Html.propTypes = { body: PropTypes.string };

module.exports = Html;
