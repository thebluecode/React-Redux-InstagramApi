import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomePage from './HomePage';

class ManageHomePage extends Component {
    render() {
        return (
            <div>
                <HomePage
                    userIsAuthorized={this.props.isAuthorized}
                    userInfo={this.props.user}
                    loadingUserProfile={this.props.loadingUserProfile}
                    loadingMap={this.props.loadingMap} />
            </div>
        );
    }
}

ManageHomePage.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    user: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        isAuthorized: state.login.isAuthorized,
        user: state.login.loggedUser,
        loadingUserProfile: state.ajaxCall.loadingUserProfile,
        loadingMap: state.ajaxCall.loadingMap
    };
}

export default connect(mapStateToProps)(ManageHomePage);