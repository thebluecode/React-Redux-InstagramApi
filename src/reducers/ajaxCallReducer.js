import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxCallReducer(state = initialState.ajaxCall, action) {

    switch (action.type) {
        case types.START_AJAX_CALL:
            return Object.assign({}, state, { processing: true });

        case types.FINISH_AJAX_CALL:
            return Object.assign({}, state, { processing: false });
    
        default:
            return state;
    }
}