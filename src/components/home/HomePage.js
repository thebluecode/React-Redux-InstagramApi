import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ManageLoginComponent from '../login/ManageLoginComponent';
import ManageMapComponent from '../map/ManageMapComponent';
import Profile from '../common/Profile';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="App-panel col-lg-4">
                        <div className="App-panel-left row">

                            {this.props.isAuthorized ?
                                <Profile info={this.props.user} />
                                :
                                <ManageLoginComponent />
                            }

                        </div>
                    </div>
                    <div className="App-panel col-lg-8">
                        <div className="App-panel-right row">
                            <ManageMapComponent />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    user: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        isAuthorized: state.login.isAuthorized,
        user: state.login.loggedUser
    };
}

export default connect(mapStateToProps)(HomePage);