import React, { Component } from  'react';
import PropTypes, { number } from 'prop-types';

class Contest extends Component {

    render() {
        return (
            <div className="Contest">
                <div className="contest-description">
                    {this.props.id}<br/>
                    {this.props.categoryName}<br/>
                    {this.props.contestName}<br/>
                    {this.props.description}<br/>
                </div>
                <div className="home-link link"
                    onClick={this.props.contestListClick}>
                    Contest List
                </div>
            </div>
        );
    }
}

Contest.propTypes = {
    id: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contestListClick: PropTypes.func.isRequired,
};

export default Contest;