import { GET_USERS } from '../types/index';
import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getUsersData } from '../actions/user';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase';


const getUsers = () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(user)
        }
      });
    });
  };

function* getUsersSaga(): Generator<any, void, any> {
    try {
        const response = yield call(getUsers);
        yield put(getUsersData(response));
    } catch (e) {
        yield put(getUsersData(e));
     }
}


export default all([
    takeLatest(GET_USERS, getUsersSaga)
])