import * as types from './actionTypes';

export function setAccessToken(accessToken) {
    return { type: types.SET_ACCESS_TOKEN, accessToken };
}