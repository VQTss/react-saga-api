import {GET_ALL_USERS, ADD_USER, DELETE_USER , UPDATE_USER} from './actionTypes'

export const getUsers = () => {
    return {
        type: GET_ALL_USERS,
    }
}

export const addUsers = (data) => {
    return {
        type: ADD_USER, payload: data
    };
};

export const deleteUsers = (data) => {
    return {
        type: DELETE_USER, payload: data
    };
}

export const updateUsers = (data) => {
    return {
        type: UPDATE_USER, payload: data
    };
}