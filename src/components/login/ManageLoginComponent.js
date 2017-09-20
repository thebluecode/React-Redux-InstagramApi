import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './LoginComponent';
import * as loginActions from '../../actions/loginActions';
import api from '../../api/InstagramApi';

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

    checkIfClientIsAuthorized() {
        if (!this.state.isAuthorized && hasAccessToken()) {
            this.props.actions.setAccessToken(getAccessToken());
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
        isAuthorized: state.login.isAuthorized
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageLoginComponent);