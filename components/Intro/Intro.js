import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { prefixLink } from 'gatsby-helpers';
import Button from 'components/Button/Button';
import './Intro.scss';

const Intro = ({ t }) => {
    const random1or2 = Math.round(Math.random()) + 1;
    const imageFileName = prefixLink(`/static/images/intro${random1or2}.jpg`);

    return (
        <div className="intro">
            <h1 className="intro__headline">{t('intro.headline1')} <strong>{t('intro.headline2')}</strong></h1>
            <div
                className="intro__image"
                style={{ backgroundImage: `url(${imageFileName})` }}
            />
            <h2 className="intro__subheadline">{t('intro.subheadline')}</h2>
            <Button href="http://myviews.pl/#!/contact">{t('intro.button')}</Button>
        </div>
    );
};

Intro.propTypes = { t: PropTypes.func };

export default translate()(Intro);
