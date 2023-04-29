import { INCREMENT, DECREMENT, ADD_NUMBER } from '../types/index';
const initialState = {
    count: 100,
}



const counterReducer = (state = initialState, actions: any) => {
    switch (actions.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case ADD_NUMBER:
            return { ...state, count: actions.payload }
        default:
            return state;
    }
};

export default counterReducer;