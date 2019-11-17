import { LOAD_DEFAULT_PAGE } from './types';
// import API from '../utils/API'

export const loadDefaultPage = () => dispatch => {
    //Using axios rather then fetch to make code just a bit leaner and handle data faster.
    dispatch({
        type: LOAD_DEFAULT_PAGE
    })
};