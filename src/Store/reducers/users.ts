import { GET_USERS, GET_USERS_SUCCESS } from '../types/index';
const initialState = {
    user: null,
    isLoading: true,
}



const usersReducer = (state = initialState, actions: any) => {
    switch (actions.type) {
        case GET_USERS:
            return { ...state, isLoadung: true }
        case GET_USERS_SUCCESS:
            return { ...state, isLoading: false,  user: actions.payload}
        default:
            return state;
    }
};

export default usersReducer;