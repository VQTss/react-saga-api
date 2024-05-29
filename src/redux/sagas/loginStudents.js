import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionTypes from '../actions/actionTypes'
import apiStudent from '../../servers/api'

export default function* loginUsersSaga() {
    yield takeEvery(actionTypes.LOGIN_USER, loginUsers);
}

function* loginUsers (action) {
    console.log("login users", action);
    try {
        const loginUsers = yield call(apiStudent.updateUsers, action.payload);
        yield put({ type: actionTypes.LOGIN_USER_SUCCESS, payload: loginUsers })
    } catch (error) {
        console.log(error);
    }
}