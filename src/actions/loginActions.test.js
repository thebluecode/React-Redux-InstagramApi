import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import * as types from './actionTypes';
import * as loginActions from './loginActions';

describe('Login Actions', () => {
    it('Should create a LOGIN_SUCCEESS action.', () => {
        // arrange
        const accessToken = 'ACCESSTOKEN';
        const expectedAction = {
            type: types.LOGIN_SUCCEESS,
            accessToken: accessToken
        };

        // act
        const action = loginActions.grantAccess(accessToken);

        // assert
        expect(action).toEqual(expectedAction);
    });

    it('Should create a REQUIRE_CURRENT_USER_POSITION_SUCCESS action.', () => {
        // arrange
        const accessToken = 'ACCESSTOKEN';
        const position = { coords: 'coordinates' };
        const expectedAction = {
            type: types.REQUIRE_CURRENT_USER_POSITION_SUCCESS,
            data: { position: position.coords, accessToken: accessToken }
        };

        // act
        const action = loginActions.requiresUserCurrentPositionSuccess(position, accessToken);

        // assert
        expect(action).toEqual(expectedAction);
    });
});