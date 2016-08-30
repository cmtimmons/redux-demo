import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';
import auth from './auth';
import employees from './employees';
export default combineReducers({
 auth,
 router,
 employees
});