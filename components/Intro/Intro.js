import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { prefixLink } from 'gatsby-helpers';
import { getRandomInt } from 'utils/helpers';
import Button from 'components/Button/Button';
import './Intro.scss';

const Intro = ({ t }) => {
    const randomInt = getRandomInt(1, 3);
    const imageFileName = prefixLink(`/static/images/intro${randomInt}.jpg`);

    return (
        <div className="intro">
            <h1 className="intro__headline">{t('intro.headline1')} <strong>{t('intro.headline2')}</strong></h1>
            <div
                className="intro__image"
                style={{ backgroundImage: `url(${imageFileName})` }}
            />
            <h2 className="intro__subheadline">{t('intro.subheadline')}</h2>
            <Button href={t('urls.offer')}>{t('intro.button')}</Button>
        </div>
    );
};

Intro.propTypes = { t: PropTypes.func };

export default translate()(Intro);
