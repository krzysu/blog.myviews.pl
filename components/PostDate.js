import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import moment from 'moment';
import 'moment/locale/pl';

const PostDate = ({ date, t, i18n }) => {
    const formatedDate = i18n.language === 'pl' ?
        moment(date).locale('pl').format('D MMMM YYYY') : moment(date).locale('en').format('MMMM Do, YYYY');

    return (
        <small>{`${t('datePrefix')} ${formatedDate}`}</small>
    );
}

PostDate.propTypes = {
    date: PropTypes.string,
    t: PropTypes.func,
    i18n: PropTypes.object,
}

export default translate()(PostDate);
