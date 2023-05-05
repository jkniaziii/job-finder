import { GET_USERS, GET_USERS_SUCCESS } from '../types/index';
const initialState = {
    users: null,
    isLoadung: false,
}



const usersReducer = (state = initialState, actions: any) => {
    switch (actions.type) {
        case GET_USERS:
            return { ...state, isLoadung: true }
        case GET_USERS_SUCCESS:
            return { ...state, isLoadung: false,  users: actions.payload}
        default:
            return state;
    }
};

export default usersReducer;