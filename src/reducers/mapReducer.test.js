import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import mapReducer from './mapReducer';
import * as types from '../actions/actionTypes';
import * as actions from '../actions/mapActions';

const initialState = {
    map: {
        initialCenter: { lat: -3.7412924923836, lng: -38.472087683405 },
        medias: [],
        activeMarker: {},
        showingInfoWindow: false,
        activeMarkerInfo: {},
        activeMarkerPosition: {}
    }
};

const selectedMarker = {
    activeMarker: { id: 11, info: { profile_picture: 'http://img.path', username: 'stefam.magnum', full_name: 'Stefam Magnum' }, position: { lat: 3.3, lng: 4.4} },
    showingInfoWindow: true,
    activeMarkerInfo: { profile_picture: 'http://img.path', username: 'stefam.magnum', full_name: 'Stefam Magnum' },
    activeMarkerPosition: { lat: 3.3, lng: 4.4 }
};

describe('mapReducer', () => {
    it('Should update activeMarker when passed SELECT_MARKER.', () => {
        const action = actions.selectMarker(selectedMarker);
        const newState = mapReducer(initialState.map, action);
        expect(newState.activeMarker).toEqual({ id: 11, info: { profile_picture: 'http://img.path', username: 'stefam.magnum', full_name: 'Stefam Magnum' }, position: { lat: 3.3, lng: 4.4} });
    });
    
    it('Should update showingInfoWindow when passed SELECT_MARKER.', () => {
        const action = actions.selectMarker(selectedMarker);
        const newState = mapReducer(initialState.map, action);
        expect(newState.showingInfoWindow).toEqual(true);
    });
    
    it('Should update activeMarkerInfo when passed SELECT_MARKER.', () => {
        const action = actions.selectMarker(selectedMarker);
        const newState = mapReducer(initialState.map, action);
        expect(newState.activeMarkerInfo).toEqual({ profile_picture: 'http://img.path', username: 'stefam.magnum', full_name: 'Stefam Magnum' });
    });

    it('Should update activeMarkerPosition when passed SELECT_MARKER.', () => {
        const action = actions.selectMarker(selectedMarker);
        const newState = mapReducer(initialState.map, action);
        expect(newState.activeMarkerPosition).toEqual({ lat: 3.3, lng: 4.4 });
    });
});