import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes'
import apiStudent from '../../servers/api'

export default function* addUsersSaga() {
    yield takeEvery(actionTypes.ADD_USER, addUsers);
}

function* addUsers (action) {
    console.log("addUsers", action);
    try {
        const addUsers = yield call(apiStudent.addUsers, action.payload);
        yield put({ type: actionTypes.ADD_USER_SUCCESS, payload: addUsers })
    } catch (error) {
        console.log(error);
    }
}