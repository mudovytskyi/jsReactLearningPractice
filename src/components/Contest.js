import React, { Component } from  'react';
import PropTypes, { number } from 'prop-types';

class Contest extends Component {
    componentDidMount() {
        this.props.fetchNames(this.props.nameIds);
    };
    
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
                           {this.props.nameIds.map(nameId =>
                            <li key={nameId} className="list-group-item">
                                {this.props.lookupName(nameId).name}
                            </li>
                        )}
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
    fetchNames: PropTypes.func.isRequired,
    nameIds: PropTypes.array.isRequired,
    lookupName: PropTypes.func.isRequired,
};

export default Contest;