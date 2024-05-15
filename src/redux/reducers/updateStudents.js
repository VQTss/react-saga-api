import * as actionType from "../actions/actionTypes";

const initialState = {
    users: null
};
export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.UPDATED_USER_SUCCESS: {
            return {
                ...state,
                users: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}