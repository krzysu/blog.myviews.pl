import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pl';

const PostDate = ({ date, lang }) => {
    const prefix = lang === 'pl' ? 'Opublikowano' : 'Published';
    const formatedDate = lang === 'pl' ?
        moment(date).locale('pl').format('D MMMM YYYY') : moment(date).locale('en').format('MMMM Do, YYYY');

    return (
        <small>{`${prefix} ${formatedDate}`}</small>
    );
}

PostDate.propTypes = {
    date: PropTypes.string,
    lang: PropTypes.string,
}

export default PostDate;
