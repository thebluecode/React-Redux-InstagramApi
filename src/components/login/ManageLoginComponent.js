import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './LoginComponent';
import * as loginActions from '../../actions/loginActions';
import * as api from '../../api/InstagramApi';
import toastr from 'toastr';

export class ManageLoginComponent extends Component {

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

    requiresUserCurrentPositionSuccess(position){
        let accessToken = this.state.login.accessToken;
        this.props.actions.requiresUserCurrentPositionSuccess(position, accessToken);
    }

    requiresUserCurrentPositionError(error) {
        toastr.error('Error trying to get user current position.');
    }

    requiresUserCurrentPosition(accessToken) {
        let self = this;
        navigator.geolocation.getCurrentPosition(
            (position) => { self.props.actions.requiresUserCurrentPositionSuccess(position, accessToken) },
            (error) => { self.requiresUserCurrentPositionError(error) }
        );
    }
    
    checkIfClientIsAuthorized() {
        if (this.props.isAuthorized && this.props.accessNotAllowd) {
            toastr.error('Error trying to fetch data from Instagram API');
        }
        
        if (!this.props.isAuthorized && api.urlHasAccessToken() && !this.props.accessNotAllowd) {
            api.setAccessToken(api.getAccessTokenFromUrl());
            this.props.actions.grantAccess(api.getAccessTokenFromUrl());
            this.requiresUserCurrentPosition(api.getAccessTokenFromUrl());
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