import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.map, action) {

    switch (action.type) {
        case types.LOAD_MEDIAS_SUCCESS:
            return Object.assign({}, state, { medias: action.medias });
        
        case types.SELECT_MARKER:
            return Object.assign({}, state, { ...action.selectedMarker });

        default:
            return state;
    }
}