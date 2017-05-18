import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga';

class Like extends Component {
    handleClick = (event) => {
        event.preventDefault();
        const { id } = this.props;

        ReactGA.event({
            category: 'Posts',
            action: 'Like',
            label: id
        });
    }

    render() {
        return (
            <button onClick={this.handleClick}>Like it!</button>
        )
    }
}

Like.PropTypes = {
    id: PropTypes.string,
}

export default Like
