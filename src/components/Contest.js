import React, { Component } from  'react';
import PropTypes, { number } from 'prop-types';

class Contest extends Component {

    render() {
        return (
            <div className="Contest">
                {this.props.id}<br/>
                {this.props.categoryName}<br/>
                {this.props.contestName}<br/>
            </div>
        );
    }
}

Contest.propTypes = {
    id: PropTypes.number.isRequired,
    contestCategory: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired
};

export default Contest;