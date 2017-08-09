import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import './LinkList.scss';

const bem = new BEMHelper('link-list');

const LinkList = ({ links }) => {
    return (
        <div {...bem()}>
            {links.map((link, index) => {

                const externalProps = link.external ? {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                } : {};

                return (
                    <a key={index} href={link.href} {...bem('item')} {...externalProps}>
                        <div {...bem('primary')}>
                            {link.primary}
                        </div>
                        <div {...bem('secondary')}>
                            {link.secondary}
                        </div>
                    </a>
                );
            })}
        </div>
    );
};

LinkList.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        primary: PropTypes.string,
        secondary: PropTypes.string,
        external: PropTypes.bool,
    })),
};

export default LinkList;
