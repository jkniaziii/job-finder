import { INCREMENT, DECREMENT, ADD_NUMBER, GET_USERS, GET_USERS_SUCCESS } from '../types/index';


export const incrementer = () => {
    return {
        type: INCREMENT
    }
};

export const decrementer = () => {
    return {
        type: DECREMENT
    }
};

export const addNumber = (data: any) => {
    return {
        type: ADD_NUMBER,
        payload: data
    }
}

export const getUsersData = (payload: any) => (dispatch: any) => {
  return new Promise<any>((resolve, reject) => {
    dispatch({ type: GET_USERS_SUCCESS, payload, resolve, reject });
  })
}


  export const getUser = () => {
    return {
      type: GET_USERS,
    };
  };

  