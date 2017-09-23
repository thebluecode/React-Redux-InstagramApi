import * as types from './actionTypes';

export function grantAccess(accessToken) {
    return { type: types.LOGIN_SUCCEESS, accessToken };
}

export function requiresUserCurrentPositionSuccess(position, accessToken) {
    return { type: types.REQUIRE_CURRENT_USER_POSITION_SUCCESS, data: { position: position.coords, accessToken: accessToken } };
}