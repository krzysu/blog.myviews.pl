import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import BEMHelper from 'react-bem-helper';
import Button from 'components/Button/Button';
import './Footer.scss';

const bem = new BEMHelper('footer');

const Footer = ({ t }) => {
    const links = [{
        href: 'https://twitter.com/krzysu',
        label: 'Twitter',
    }, {
        href: 'https://github.com/krzysu',
        label: 'GitHub',
    }, {
        href: 'https://soundcloud.com/krzysu',
        label: 'SoundCloud',
    }];

    return (
        <div {...bem()}>
            <div className="wrapper">
                <div {...bem('menu')}>
                    <ul {...bem('list')}>
                        {links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" {...bem('link')}>
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <Button style="alt" href="http://myviews.pl/#!/contact">
                        {t('footer.contactButton')}
                    </Button>
                </div>
                <small {...bem('copyright')}>{`copyright © ${(new Date()).getFullYear()} Kris Urbas @krzysu`}</small>
            </div>
        </div>
    );
};

Footer.propTypes = { t: PropTypes.func };

export default translate()(Footer);
