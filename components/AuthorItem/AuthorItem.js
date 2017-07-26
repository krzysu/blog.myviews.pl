import React from 'react';
import { translate, Trans } from 'react-i18next';
import { prefixLink } from 'gatsby-helpers';
import './AuthorItem.scss';

const AuthorItem = ({ t }) => {
    const emailReversed = 'moc.liamg@lp.usyzrk';
    const emailCorrect = emailReversed.split('').reverse().join('');

    return (
        <div className="author-item">
            <img
                src={prefixLink('/static/img/profile-pic.jpg')}
                alt="author picture"
                className="author-item__image"
            />
            <div className="author-item__description">
                <p>
                    <Trans i18nKey="authorItem.intro" className="test">
                    x <strong>x</strong> x
                    </Trans>
                </p>
                <p>
                    <Trans i18nKey="authorItem.body">
                        x <strong>x</strong> x
                    </Trans>
                </p>
                <div className="author-item__contact">
                    <span className="author-item__contact-label">{t('authorItem.sayHello')}</span>
                    <ul className="author-item__contact-list">
                        <li className="author-item__contact-item">
                            <a href={`mailto:${emailCorrect}`}>{t('authorItem.writeMe')}</a>
                        </li>
                        <li className="author-item__contact-item">
                            <a href="https://twitter.com/krzysu" target="_blank">{t('authorItem.onTwitter')}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default translate()(AuthorItem);
