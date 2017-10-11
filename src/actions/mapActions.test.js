import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import * as types from './actionTypes';
import * as mapActions from './mapActions';

describe('Map Actions', () => {
    it('Should create a SELECT_MARKER action.', () => {
        // arrange
        const selectedMarker = { id: 'clean-code', title: 'Clean Code' };
        const expectedAction = {
            type: types.SELECT_MARKER,
            selectedMarker: selectedMarker
        };

        // act
        const action = mapActions.selectMarker(selectedMarker);

        // assert
        expect(action).toEqual(expectedAction);
    });
});