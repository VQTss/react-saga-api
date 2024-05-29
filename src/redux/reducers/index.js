import { combineReducers } from 'redux'

import getUsers from '../reducers/getStudents'
import { addUsers, deleteUsers, loginUser, updateUsers } from '../actions'

export default combineReducers({
    getUsers,
    addUsers,
    deleteUsers,
    updateUsers,
    loginUser
})

