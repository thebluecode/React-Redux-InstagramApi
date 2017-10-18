import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as loginActions from '../actions/loginActions';
import * as mapActions from '../actions/mapActions';

describe('Configure Store', () => {
    it('Should handle login success.', () => {
        const store = createStore(rootReducer, initialState);
        
        // act
        const accessToken = 'MYACCESSTOKEN';
        const action = loginActions.grantAccess(accessToken);
        store.dispatch(action);

        // assert
        const expectedAccessToken = store.getState().login.accessToken;
        const expectedIsAuthorized = store.getState().login.isAuthorized;
        const expected = {
            title: 'Clean Code'
        };

        expect(expectedAccessToken).toEqual('MYACCESSTOKEN');
        expect(expectedIsAuthorized).toEqual(true);
    });

    it('Should handle marker map selection.', () => {
        const store = createStore(rootReducer, initialState);
        
        // act
        const selectedMarker = {
            activeMarker: {
                id: 11,
                info: { id: 1111, profile_picture: 'first_picture', username: 'first_username', full_name: 'first_full_name'},
                position: { lat: 52.5, lng: 53.53 }
            },
            showingInfoWindow: true,
            activeMarkerInfo: { id: 2222, profile_picture: 'any picture', username: 'any user name', full_name: 'any full name'},
            activeMarkerPosition: { lat: 12.3, lng: 45.6 }
        };

        const action = mapActions.selectMarker(selectedMarker);
        store.dispatch(action);

        // assert
        const expectedActiveMarker = store.getState().map.activeMarker;
        const expectedShowingInfoWindow = store.getState().map.showingInfoWindow;
        const expectedActiveMarkerInfo = store.getState().map.activeMarkerInfo;
        const expectedActiveMarkerPosition = store.getState().map.activeMarkerPosition;
        
        expect(expectedActiveMarker).toEqual({ id: 11, info: { id: 1111, profile_picture: 'first_picture', username: 'first_username', full_name: 'first_full_name'}, position: { lat: 52.5, lng: 53.53 } });
        expect(expectedShowingInfoWindow).toEqual(true);
        expect(expectedActiveMarkerInfo).toEqual({ id: 2222, profile_picture: 'any picture', username: 'any user name', full_name: 'any full name'});
        expect(expectedActiveMarkerPosition).toEqual({ lat: 12.3, lng: 45.6 });
    });
});