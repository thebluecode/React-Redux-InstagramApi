import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './LoginComponent';
import * as loginActions from '../../actions/loginActions';
import * as api from '../../api/InstagramApi';
import toastr from 'toastr';

class ManageLoginComponent extends Component {

    constructor(props, context) {
        super(props, context);

        this.redirectToAuthorizationPage = this.redirectToAuthorizationPage.bind(this);
    }

    componentWillMount() {
        this.checkIfClientIsAuthorized();    
    }

    redirectToAuthorizationPage() {
        api.redirectToAuthorizationPage();
    }

    hasAccessToken() {
        return window.location.href.indexOf('#access_token=') !== -1;
    }

    getAccessToken() {
        var arr = window.location.href.split('#')
        var token = arr[arr.length - 1].split('=')[1];
        return token;
    }

    requiresUserCurrentPositionSuccess(position){
        let accessToken = this.state.login.accessToken;
        this.props.actions.requiresUserCurrentPositionSuccess(position, accessToken);
    }

    requiresUserCurrentPositionError(error) {
        toastr.error('Error trying to get user current position.');
    }

    requiresUserCurrentPosition() {
        let self = this;
        navigator.geolocation.getCurrentPosition(
            (position) => { self.props.actions.requiresUserCurrentPositionSuccess(position, self.getAccessToken()) },
            (error) => { self.requiresUserCurrentPositionError(error) }
        );
    }
    
    checkIfClientIsAuthorized() {
        if (this.props.accessNotAllowd) {
            toastr.error('Error trying to fetch data from Instagram API');
        }
        
        if (!this.props.isAuthorized && this.hasAccessToken() && !this.props.accessNotAllowd) {
            api.setAccessToken(this.getAccessToken());
            this.props.actions.grantAccess(this.getAccessToken());
            this.requiresUserCurrentPosition(this.getAccessToken());
        }
    }

    render() {
        return (
            <Login onClick={this.redirectToAuthorizationPage} />
        );
    }
}

ManageLoginComponent.propTypes = {
    actions: PropTypes.object.isRequired,
    isAuthorized: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        isAuthorized: state.login.isAuthorized,
        accessNotAllowd: state.login.accessNotAllowd
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageLoginComponent);