import { combineReducers } from 'redux';
import login from './loginReducer';
import map from './mapReducer';

const rootReducers = combineReducers({
    login,
    map
});

export default rootReducers;