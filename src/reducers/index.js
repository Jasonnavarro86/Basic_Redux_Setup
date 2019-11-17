import { combineReducers } from 'redux';
import defaultPageReducer from './defaultPageReducer';

export default combineReducers({
    defaultPage: defaultPageReducer
});