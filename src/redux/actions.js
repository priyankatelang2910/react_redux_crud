// actions.js

export const addStudent = (student) => {
    return {
      type: "ADD_STUDENTS",
      payload: student
    }
  }
  
  export const deleteStudent = (id) => {
    return {
      type: "DELETE_STUDENT",
      payload: id
    }
  }
  
  export const updateStudent = (student) => {
    return {
      type: "UPDATE_STUDENT",
      payload: student
    }
  }
  