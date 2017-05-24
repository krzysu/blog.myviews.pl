import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { prefixLink } from 'gatsby-helpers';
import './LikeButton.scss';

class LikeButton extends Component {
    handleClick = (event) => {
        event.preventDefault();
        const { id } = this.props;

        ReactGA.event({
            category: 'Posts',
            action: 'Like',
            label: id,
        });
    }

    render() {
        return (
            <button className="like-button" onClick={this.handleClick}>
                <img
                    src={prefixLink('/static/img/heart.svg')}
                    alt="author picture"
                    className="like-button__img"
                />
            </button>
        )
    }
}

LikeButton.PropTypes = {
    id: PropTypes.string,
}

export default LikeButton;
