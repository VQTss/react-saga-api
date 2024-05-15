import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import apiStudent from '../../servers/api'

export default function* deleteUsersSaga() {
    yield takeEvery(actionType.DELETE_USER, deleteUsers);
}

function* deleteUsers(action) {
    console.log("action: ",action)
    try {
        const postResponse = yield call(apiStudent.deleteUsers, action.payload);
        yield put({ type: actionType.DELETED_USER_SUCCESS, payload: postResponse });
    } catch (err) {
        console.log(err);
    }
}