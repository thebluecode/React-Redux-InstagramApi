import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import * as types from './actionTypes';
import * as detailsActions from './detailsActions';

describe('Details Actions', () => {
    it('Should create a FETCH_MEDIAS_REQUEST action.', () => {
        // arrange

        const entryData = {
            lat: 'data.lat',
            lng: 'data.lng',
            accessToken: 'data.accessToken'
        };

        const expectedData = {
            position: {
                latitude: 'data.lat',
                longitude: 'data.lng',
            },
            accessToken: 'data.accessToken'
        };

        const expectedAction = {
            type: types.FETCH_MEDIAS_REQUEST,
            data: expectedData
        };

        // act
        const action = detailsActions.fetchMedias(entryData);

        // assert
        expect(action).toEqual(expectedAction);
    });
});