import React, { Component } from 'react';
import LoginInstagram from '../login/LoginInstagram';
import InstaMap from '../map/InstaMap';
import Profile from '../profile/Profile';
import axios from 'axios';
import endpoints from '../../constants/InstagramApiEndpoints';
import api from '../../api/InstagramApi';

class HomePage extends Component {

    state = { 
        authorization: {
            client_id: 'bb71d6570d1c48c7af64917c7be7d992',
            client_secret: 'bb71d6570d1c48c7af64917c7be7d992',
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:3000/'
        },
        loggedUser: {},
        accessToken: '',
        isLogged: false,
        //position: { lat: 37.778519, lng: -122.405640 },
        position: { lat: -3.7412924923836, lng: -38.472087683405 },
        posts: []
    }

    getCurrentPosition = (position) => {
        return {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
    }

    getLocationsByPosition = (position) => {
        
        let self = this;

        // self.getRecentMediasByLocations('mock');

        axios.get(endpoints.getLocationsUrl, {
            params: {
                lat: position.latitude,
                lng: position.longitude,
                access_token: this.state.accessToken
            }
        })
        .then(function (response) {
            self.getRecentMediasByLocations(response.data.data)
        });
    }

    getRecentMediasByLocationId = (locationId) => {
        
        let self = this;

        var url = endpoints.getRecentMediaUrl.replace('{location_id}', locationId)

        axios.get(url, { params: { access_token: this.state.accessToken } })
            .then(function (response) {
                if (response.data.data.length > 0) {
                    self.setState(prevState => ({ posts: prevState.posts.concat(response.data.data) }));
                }
            });
    }

    getRecentMediasByLocations = (arrLocations) => {

        let self = this;

        for (var i = 0; i < arrLocations.length; i++) {
            self.getRecentMediasByLocationId(arrLocations[i].id);
        }
    }

    populateMedias = (position) => {
        if (position) {
            this.getLocationsByPosition(this.getCurrentPosition(position));
        }
    }

    setCoordinates = (position) => {
        if (position) {
            this.populateMedias(position);
        }
    }

    handleCoordinatesError = (error) =>  {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.log("An unknown error occurred.");
                break;
            default:
                break;
        }
    }

    onLoginSucceeded = (token) => {
        if (token) {

            api.setAccessToken(token);

            console.log('TOKEN TOKEN', api.getAccessToken());

            let self = this;

            axios.get(endpoints.getLoggedUserUrl, { params: { access_token: token } })
            .then(function (response) {
                if (response.data) {
                    
                    self.setState({ 
                        loggedUser: response.data.data,
                        isLogged: true,
                        accessToken: token
                    }, () => {
                        navigator.geolocation.getCurrentPosition(self.setCoordinates, self.handleCoordinatesError)
                    });
                }
            });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="App-panel col-lg-4">
                    <div className="App-panel-left row">

                        {!this.state.isLogged ?

                            <LoginInstagram
                                clientId={this.state.authorization.client_id}
                                redirectUri={this.state.authorization.redirect_uri}
                                onSuccess={this.onLoginSucceeded} />
                            :
                            <Profile user={this.state.loggedUser} />
                        }
                    </div>
                </div>
                <div className="App-panel col-lg-8">
                    <div className="App-panel-right row">
                        <InstaMap
                            position={this.state.position}
                            markers={this.state.posts} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;