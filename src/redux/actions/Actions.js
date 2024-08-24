
import * as type from './actionType.js'

export const addUser=(student)=>{
    return{
        type:type.ADD_USERS,
        payload: student
    }
}

export const updateUser=(student)=>{
    return{
        type:type.UPDATE_STUDENT,
        payload:student
    }
}

export const deleteUsers=(id)=>{
    return{
        type:type.DELETE_STUDENT,
        payload:id
    }
}