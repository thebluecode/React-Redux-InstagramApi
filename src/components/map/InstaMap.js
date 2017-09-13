import React, { Component } from "react"
import PropTypes from 'prop-types';
import { Map, InfoWindow , Marker, GoogleApiWrapper } from 'google-maps-react';
import Profile from '../profile/Profile';

const style = {width: '100%', height: '100%', position: 'absolute'}

export class InstaMap extends Component {

    state = {
        activeMarker: {},
        showingInfoWindow: false,
        user: {},
        activeMarkerPosition: {}
    }

    onMarkerClick = (props, marker, e) => {
        
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            user: props.user,
            activeMarkerPosition: props.position
        });
    }

    render() {

        var createMarker = function (marker) {
            
            return (

                <Marker
                    key={marker.id}
                    user={marker.user}
                    position={{ lat: marker.location.latitude, lng: marker.location.longitude }}
                    onClick={this.onMarkerClick} />
            );
        };

        return (
            <div>
                <Map
                    google={this.props.google}
                    style={style}
                    initialCenter={this.props.position}
                    className={'map'}
                    zoom={14} >

                    { this.props.markers.length > 0 ? this.props.markers.map(createMarker, this) : ''}

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        
                            <Profile user={this.state.user} position={{ lat: this.state.activeMarkerPosition.lat, lng: this.state.activeMarkerPosition.lng }} />
                            
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

InstaMap.PropTypes = {
    google: PropTypes.object.isRequired,
    position: PropTypes.object.isRequired
};

export default GoogleApiWrapper({
    apiKey: (' AIzaSyCuVCHgSnsnQyu4YLJAPr5H2LK50mhXBEc')
})(InstaMap)