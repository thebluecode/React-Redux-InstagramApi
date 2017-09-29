import { combineReducers } from 'redux';
import login from './loginReducer';
import map from './mapReducer';
import ajaxCall from './ajaxCallReducer';

const rootReducers = combineReducers({
    login,
    map,
    ajaxCall
});

export default rootReducers;