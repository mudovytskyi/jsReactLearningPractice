import React, { Component } from  'react';
import PropTypes, { number } from 'prop-types';

class Contest extends Component {

    render() {
        return (
            <div className="Contest">
                {/* <div className="contest-description">
                    {this.props.id}<br/>
                    {this.props.categoryName}<br/>
                    {this.props.contestName}<br/>
                    {this.props.description}<br/>
                </div> */}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Contest Description</h3>
                    </div>
                    <div className="panel-body">
                        <div className="contest-description">
                            {this.props.id}<br/>
                            {this.props.categoryName}<br/>
                            {this.props.contestName}<br/>
                            {this.props.description}<br/>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Proposed Names</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item">Name one ...</li>
                            <li className="list-group-item">Name two ...</li>
                        </ul>
                    </div>
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