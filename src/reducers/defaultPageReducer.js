import { LOAD_DEFAULT_PAGE } from '../actions/types';

const initialState = {
    
    defaultList: [],
  
}

export default function (state = initialState, action) {

    switch (action.type) {

        case LOAD_DEFAULT_PAGE:
            //Adding a 'viewed' boolean to each fact (one time on page load) to avoid repetition while leaving the door open for scaling.
            const loadNewList = [ {id:1,name: "Test One"}, {id:2, name: "Test Two"} ]
            return {
                ...state,
                defaultList: loadNewList
            }
        default:
            return state;
    }
}
