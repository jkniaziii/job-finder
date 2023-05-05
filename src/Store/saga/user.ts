import { GET_USERS } from '../types/index';
import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getUsersData } from '../actions';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase';


const getUsers = () => {
    onAuthStateChanged(auth, user => {
        if (user) {
          return user;
        } 
      })
};

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