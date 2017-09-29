import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {

    switch (action.type) {
        case types.LOGIN_SUCCEESS:
            return Object.assign({}, state, { accessToken: action.accessToken, isAuthorized: true });

        case types.LOAD_USER_DATA_SUCCESS:
            return Object.assign({}, state, { loggedUser: action.user });
    
        case types.ERROR_LOAD_USER_PROFILE_AJAX_CALL:
            return Object.assign({}, state, { accessToken: '', isAuthorized: false, loggedUser: {}, accessNotAllowd: true });
    
        default:
            return state;
    }
}