import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxCallReducer(state = initialState.ajaxCall, action) {

    switch (action.type) {
        case types.START_LOAD_USER_PROFILE_AJAX_CALL:
            return Object.assign({}, state, { loadingUserProfile: true });

        case types.FINISH_LOAD_USER_PROFILE_AJAX_CALL:
            return Object.assign({}, state, { loadingUserProfile: false });

        case types.START_LOAD_MEDIA_AJAX_CALL:
            return Object.assign({}, state, { loadingMap: true });

        case types.FINISH_LOAD_MEDIA_AJAX_CALL:
            return Object.assign({}, state, { loadingMap: false });
    
        default:
            return state;
    }
}