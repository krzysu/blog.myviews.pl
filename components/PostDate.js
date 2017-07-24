import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pl';

const PostDate = ({ date, lang }) => {
    const prefix = lang === 'pl' ? 'Opublikowano' : 'Published';
    const format = lang === 'pl' ? 'D MMMM YYYY' : 'MMMM Do, YYYY';

    return (
        <small>
            {`${prefix} ${moment(date).locale(lang).format(format)}`}
        </small>
    );
}

PostDate.propTypes = {
    date: PropTypes.string,
    lang: PropTypes.string,
}

export default PostDate;
