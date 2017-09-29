import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import Loading from '../common/Loading';

class ManageHomePage extends Component {
    render() {
        return (
            <div>
                <Loading display={this.props.loading} />
                <HomePage
                    userIsAuthorized={this.props.isAuthorized}
                    userInfo={this.props.user} />
            </div>
        );
    }
}

ManageHomePage.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    user: PropTypes.object,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        isAuthorized: state.login.isAuthorized,
        user: state.login.loggedUser,
        loading: state.ajaxCall.processing
    };
}

export default connect(mapStateToProps)(ManageHomePage);