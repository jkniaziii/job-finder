import { GET_USERS } from '../types/index';
import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getUsersData } from '../actions';


const getUsers = () => axios.get("https://jsonplaceholder.typicode.com/users");

function* getUsersSaga() {
    try {
        //@ts-ignore
        const response = yield call(getUsers);
        yield put(getUsersData(response.data));
    } catch (e) { }
}


export default all([
    takeLatest(GET_USERS, getUsersSaga)
])