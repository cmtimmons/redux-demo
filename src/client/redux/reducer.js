import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';
import auth from './auth';
import employees from './employees';
import { reducer as form } from 'redux-form'
export default combineReducers({
 auth,
 router,
 form,
 employees
});