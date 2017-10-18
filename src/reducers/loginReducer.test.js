import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import loginReducer from './loginReducer';
import * as types from '../actions/actionTypes';
import * as actions from '../actions/loginActions';

describe('loginReducer', () => {
    it('Should set access token when passed LOGIN_SUCCEESS.', () => {
        // arrange
        const initialState = {
            login: {
                accessToken: '',
                isAuthorized: false,
                loggedUser: {},
                accessNotAllowd: false
             }
        };

        const token = 'MYTOKEN';
        const action = actions.grantAccess(token);

        // act
        const newState = loginReducer(initialState.login, action);

        // assert
        expect(newState.accessToken).toEqual('MYTOKEN');
    });

    it('Should set authorization to true when passed LOGIN_SUCCEESS.', () => {
        // arrange
        const initialState = {
            login: {
                accessToken: '',
                isAuthorized: false,
                loggedUser: {},
                accessNotAllowd: false
             }
        };

        const token = 'MYTOKEN';
        const action = actions.grantAccess(token);

        // act
        const newState = loginReducer(initialState.login, action);

        // assert
        expect(newState.isAuthorized).toEqual(true);
    });
});