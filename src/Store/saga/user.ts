import { GET_USERS } from '../types/index';
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getUsersData } from '../actions/user';
import { getUserApi } from '../../Api/user';
import { getLocalStorage } from '../../Utills';


const getUsers = async () => {
  const accessToken = getLocalStorage('accessToken')
  if (accessToken) {
    const user = await getUserApi();
    return user;
  } else {
    return null;
  }
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