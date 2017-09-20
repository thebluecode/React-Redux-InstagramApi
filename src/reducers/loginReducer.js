import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {

    switch (action.type) {
        case types.SET_ACCESS_TOKEN:
                return Object.assign({}, { accessToken: action.accessToken, isAuthorized: true })
            break;
    
        default:
            break;
    }
}