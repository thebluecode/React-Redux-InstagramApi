import React from "react"
import PropTypes from 'prop-types';
import { Map, InfoWindow , Marker } from 'google-maps-react';
import Profile from '../common/Profile';
import { BrowserRouter, Link } from 'react-router-dom';
import lodash from 'lodash';

const style = {width: '100%', height: '100%', position: 'absolute'}

const filterMarkersByPosition = (markers, position) => {
    return markers.filter(marker => marker.position.lat === position.lat &&
                                    marker.position.lng === position.lng);
}

const groupMarkersByUser = (markers) => {
    return lodash.chain(markers)
                 .groupBy(marker => marker.info.id)
                 .map(function(val, key) {
                     return {
                         id: key,
                         info: val[0].info
                     };
                 }).value();
}

const Profiles = ({markers, activePosition}) => {
    let filtered = filterMarkersByPosition(markers, activePosition);
    let grouped = groupMarkersByUser(filtered);

    return (
        <div>
            {grouped.map(marker =>
                <div key={marker.id} >
                    <Profile
                        key={marker.id}
                        info={marker.info}
                        position={activePosition} />

                        <BrowserRouter>
                            <Link className="btn btn-primary" to={'/details/' + marker.info.id + '/' + activePosition.lat + '/' + activePosition.lng}>ver posts</Link>
                        </BrowserRouter>
                        <br/>
                        <br/>
                </div>)
            }
        </div>
    );
}

const MapComponent = ({google, initialCenter, markers, onMarkerClick, activeMarker, showingInfoWindow, activeMarkerInfo, activeMarkerPosition}) => {
    return (
        <div>
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
                    <div className={'text-center'}>

                        <Profiles
                            markers={markers}
                            activePosition={{ lat: activeMarkerPosition.lat, lng: activeMarkerPosition.lng }} />
                    </div>
                        
                </InfoWindow>
            </Map>
        </div>
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