import React from 'react';
import { translate, Trans } from 'react-i18next';
import { prefixLink } from 'gatsby-helpers';
import './AuthorItem.scss';

const AuthorItem = () => {
    return (
        <div className="author-item">
            <img
                src={prefixLink('/static/images/intro2.jpg')}
                alt="author picture"
                className="author-item__image"
            />
            <div className="author-item__description">
                <Trans i18nKey="authorItem.body">
                    Nazywam się <strong>Krzysiek Urbas</strong> i pomagam firmom budować aplikacje internetowe.
                    <strong>W czym mogę Ci pomóc? Napisz do mnie!</strong>
                </Trans>
            </div>
        </div>
    );
};

export default translate()(AuthorItem);
