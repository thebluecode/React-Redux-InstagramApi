import React from "react"
import PropTypes from 'prop-types';
import { Map, InfoWindow , Marker } from 'google-maps-react';
import Profiles from '../common/Profiles';

const style = {width: '100%', height: '100%', position: 'absolute'}

const MapComponent = ({google, initialCenter, markers, onMarkerClick, activeMarker, showingInfoWindow, activeMarkerInfo, activeMarkerPosition, activeProfiles}) => {

    return (
        <Map
            google={google}
            style={style}
            initialCenter={initialCenter}
            className={'map'}
            zoom={14}
            clickableIcons={false} >

            { markers && 
                markers.map(marker => 
                    <Marker
                        key={marker.id}
                        info={marker.info}
                        position={marker.position}
                        onClick={onMarkerClick} /> )}

            <InfoWindow
                marker={activeMarker}
                visible={showingInfoWindow} >
                
                <Profiles
                    profiles={activeProfiles}
                    position={{ lat: activeMarkerPosition.lat, lng: activeMarkerPosition.lng }} />
                    
            </InfoWindow>
        </Map>
    );
}

MapComponent.PropTypes = {
    google: PropTypes.object.isRequired,
    initialCenter: PropTypes.object.isRequired,
    markers: PropTypes.array,
    onMarkerClick: PropTypes.func.isRequired,
    activeMarker: PropTypes.object.isRequired,
    showingInfoWindow: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    activeMarkerPosition: PropTypes.object.isRequired
};

export default MapComponent;