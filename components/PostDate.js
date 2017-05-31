import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const PostDate = ({ date }) => {
    return (
        <small>{`Opublikowano ${moment(date).locale('pl').format('D MMMM YYYY')}`}</small>
    );
}

PostDate.propTypes = {
    date: PropTypes.string,
}

export default PostDate;
