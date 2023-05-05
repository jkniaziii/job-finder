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

export const getUsersData = (data: any) => {
  console.log({data});
  
    return {
      type: GET_USERS_SUCCESS,
      payload: data
    };
  };

  export const getUser = () => {
    return {
      type: GET_USERS,
    };
  };

  