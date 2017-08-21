import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import BEMHelper from 'react-bem-helper';
import { translate } from 'react-i18next';
import ShareButtons from 'components/ShareButtons';
import './LikeButton.scss';

const bemButton = new BEMHelper('like-button');
const bemWrapper = new BEMHelper('like-button-wrapper');

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { isActive: false };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.page.path !== this.props.page.path) {
            this.setState({ isActive: false });
        }
    }

    handleClick(event) {
        event.preventDefault();
        if (this.state.isActive) {
            return;
        }

        const { page } = this.props;

        ReactGA.event({
            category: 'Posts',
            action: 'Like',
            label: page.path,
        });

        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        const { isActive } = this.state;
        const { t, page } = this.props;
        const { path, data } = page;
        const text = isActive ? t('likeButton.thanks') : t('likeButton.likeIt');

        return (
            <div {...bemWrapper()}>
                <button onClick={this.handleClick} {...bemButton('', { active: isActive })}>
                    <svg className="like-button__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="-2 -2 36 36">
                        <title>heart</title>
                        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
                    </svg>
                    <span className="like-button__text">{text}</span>
                </button>
                <div {...bemWrapper('share-buttons')}>
                    {isActive && <ShareButtons url={path} text={data.title} />}
                </div>
            </div>
        );
    }
}

LikeButton.propTypes = {
    page: PropTypes.shape({
        path: PropTypes.string,
        data: PropTypes.object,
    }),
    t: PropTypes.func,
};

export default translate()(LikeButton);
