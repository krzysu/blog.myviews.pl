import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { config } from 'config';
import { getAbstract } from 'utils/helpers';
import { prefixLink } from 'gatsby-helpers';

const HeadMeta = (props) => {
    const { data, path } = props;

    const { title, imageUrl, layout } = data;
    const description = getAbstract(data);

    const metaTitle = title ? `${title} | ${config.blogTitle}` : config.blogTitle;
    const metaDescription = description || config.blogDescription;
    const type = layout === 'post' ? 'article' : 'website';
    const metaImageUrl = imageUrl || config.blogImageUrl;
    const fullMetaImageUrl = config.hostname + metaImageUrl;

    return (
        <Helmet>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />

            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={prefixLink(path)} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={fullMetaImageUrl} />
            <meta property="og:locale" content="pl_PL" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@krzysu" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={fullMetaImageUrl} />

            <meta name="google-site-verification" content="Hrk4F1pkLs_5drnNnAkPtoDaPkV67X0DenupaPMEwTc" />
        </Helmet>
    );
};

const pagePropTypes = {
    body: PropTypes.string,
    date: PropTypes.string,
    layout: PropTypes.string,
    path: PropTypes.string,
    readNext: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
};

HeadMeta.propTypes = {
    data: PropTypes.shape(pagePropTypes),
    path: PropTypes.string,
};

export default HeadMeta;
