import axios from 'axios';

export const createUser = async (payload: any) => {
    console.log({payload});
    
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/create-user`, payload);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateUser = async (id: any, payload: any) => {
  console.log({payload});
  try {
    const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

