import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DetailsPage from './DetailsPage';
import * as detailsActions from '../../actions/detailsActions';
import * as api from '../../api/InstagramApi';
import { filterMedias } from '../../selectors/selectors';

export class ManageDetailsPage extends Component {
    
    componentWillMount() {
        let lat = this.props.match.params.lat;
        let lng = this.props.match.params.lng;
        let accessToken = api.getAccessToken();
        
        this.props.actions.fetchMedias({ lat: lat, lng: lng, accessToken: accessToken });
    }

    render() {
        return (
            <DetailsPage medias={this.props.medias} />
        );
    }
}

ManageDetailsPage.propTypes = {
    medias: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    let filter = {
        userId: ownProps.match.params.user_id,
        lat: ownProps.match.params.lat,
        lng : ownProps.match.params.lng
    };

    return {
        medias: filterMedias(state.map.medias, filter)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(detailsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDetailsPage);