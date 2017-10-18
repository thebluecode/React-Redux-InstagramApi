import { combineReducers } from 'redux';
import login from './loginReducer';
import map from './mapReducer';
import ajaxCall from './ajaxCallReducer';

const rootReducer = combineReducers({
    login,
    map,
    ajaxCall
});

export default rootReducer;