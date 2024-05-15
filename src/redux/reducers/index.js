import { combineReducers } from 'redux'

import getUsers from '../reducers/getStudents'
import { addUsers, deleteUsers, updateUsers } from '../actions'

export default combineReducers({
    getUsers,
    addUsers,
    deleteUsers,
    updateUsers,
})

