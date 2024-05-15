import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: []
}

export default function( state = initialState, actions){
    switch(actions.type){
        case actionTypes.GET_ALL_USERS_SUCCESS:
            return {
               ...state,
                users: actions.payload,
            }
        default:
            return state;
    }
}
