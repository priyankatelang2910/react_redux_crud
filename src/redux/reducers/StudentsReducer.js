import * as type from '../actions/actionType.js'
const initialState = {
    studensData: []
};

const StudentsReducer = (state = initialState, action) => {
    console.log(state);
    console.log("action.payload", action.payload);

    switch (action.type) {
        case type.ADD_USERS:
            
            const addedState = {
                ...state,
                studensData: [...state.studensData, action.payload]
            };
            // console.log("State after ADD_STUDENT:", addedState);
            return addedState;  

        case type.DELETE_STUDENT:
            // Return a new state with the filtered students
            return {
                ...state,
                studensData: state.studensData.filter(student => student.id !== action.payload)
            };

        case type.UPDATE_STUDENT:
            // Return a new state with the updated student
            return {
                ...state,
                studensData: state.studensData.map(student => 
                    student.id === action.payload.id ? action.payload : student
                )
            };

        default:
            return state;
    }
};

export default StudentsReducer;
