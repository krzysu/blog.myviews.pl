import React from 'react';
import PropTypes from 'prop-types';
import { config } from 'config';
import { translate } from 'react-i18next';
import { prefixLink } from 'gatsby-helpers';
import { truncateForTwitter } from 'utils/helpers';
import Button from 'components/Button/Button';

const ShareButtons = ({ url, text }) => {
    const shareUrl = `${config.hostname}${url ? prefixLink(url) : ''}`;
    const twitterMessage = truncateForTwitter(text) || 'Check this out! -> ';

    const links = [
        {
            href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
            text: 'facebook',
            icon: 'facebook',
        },
        {
            href: `https://twitter.com/share?url=${shareUrl}&via=krzysu&text=${encodeURIComponent(twitterMessage)}`,
            text: 'twitter',
            icon: 'twitter',
        },
    ];

    return (
        <div>
            {links.map((link, index) => (
                <Button
                    key={index}
                    href={link.href}
                    external={true}
                    styleObject={{ margin: '0 1em 1em' }}
                    icon={link.icon}
                >
                    {link.text}
                </Button>
            ))}
        </div>
    );
};

ShareButtons.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string,
    t: PropTypes.func,
};

export default translate()(ShareButtons);
