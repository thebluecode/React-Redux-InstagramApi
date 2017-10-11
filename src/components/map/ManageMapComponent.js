import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleApiWrapper } from 'google-maps-react';
import MapComponent from './MapComponent';
import * as mapActions from '../../actions/mapActions';
import * as selectors from '../../selectors/selectors';

class ManageMapComponent extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            map: {
                activeMarker: {},
                showingInfoWindow: false,
                activeMarkerInfo: {},
                activeMarkerPosition: {}
            }
        };

        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    onMarkerClick(props, marker, e){
        this.props.actions.selectMarker({
            activeMarker: marker,
            showingInfoWindow: true,
            activeMarkerInfo: props.info,
            activeMarkerPosition: props.position
        });
    }

    render() {
        return (
            <MapComponent
                google={this.props.google}
                initialCenter={this.props.initialCenter}
                markers={this.props.markers}
                onMarkerClick={this.onMarkerClick}
                activeMarker={this.props.activeMarker}
                showingInfoWindow={this.props.showingInfoWindow}
                activeMarkerInfo={this.props.activeMarkerInfo}
                activeMarkerPosition={this.props.activeMarkerPosition}
                activeProfiles={this.props.activeProfiles} />
        );
    }
}

ManageMapComponent.propTypes = {
    google: PropTypes.object,
    initialCenter: PropTypes.object.isRequired,
    markers: PropTypes.array,
    onMarkerClick: PropTypes.func,
    activeMarker: PropTypes.object,
    showingInfoWindow: PropTypes.bool.isRequired,
    activeMarkerInfo: PropTypes.object,
    activeMarkerPosition: PropTypes.object

};

function mapStateToProps(state, ownProps) {
    return {
        initialCenter: state.map.initialCenter,
        markers: selectors.mediasFormatedForMapMarkers(state.map.medias),        
        activeMarker: state.map.activeMarker,
        showingInfoWindow: state.map.showingInfoWindow,
        activeMarkerInfo: state.map.activeMarkerInfo,
        activeMarkerPosition: state.map.activeMarkerPosition,
        activeProfiles: selectors.formatMediasToGroupedProfilesByActivePosition(state.map.medias, { lat: state.map.activeMarkerPosition.lat, lng: state.map.activeMarkerPosition.lng }),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(mapActions, dispatch)
    };
}

// Integrate ManageMapComponent with Redux and GoogleApi
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCuVCHgSnsnQyu4YLJAPr5H2LK50mhXBEc')
})(connect(mapStateToProps, mapDispatchToProps)(ManageMapComponent))