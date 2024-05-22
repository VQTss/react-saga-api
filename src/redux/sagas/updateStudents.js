import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes'
import apiStudent from '../../servers/api'

export default function* addUsersSaga() {
    yield takeEvery(actionTypes.UPDATE_USER, updatedUsers);
}

function* updatedUsers (action) {
    console.log("updatedUsers", action);
    try {
        const upUsers = yield call(apiStudent.updateUsers, action.payload);
        yield put({ type: actionTypes.UPDATED_USER_SUCCESS, payload: upUsers })
    } catch (error) {
        console.log(error);
    }
}