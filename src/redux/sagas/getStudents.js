import {call , put, takeEvery} from 'redux-saga/effects'
import apiStudent from '../../servers/api'
import * as actionTypes from '../actions/actionTypes'



export default function* getUsersFetch(){
    yield takeEvery(actionTypes.GET_ALL_USERS, getUsers);
}


function* getUsers() {
    try {
        const users = yield call(apiStudent.getdata);
        yield put({ type: actionTypes.GET_ALL_USERS_SUCCESS, payload: users});
    } catch (error) {
        console.log(error);
    }
}
