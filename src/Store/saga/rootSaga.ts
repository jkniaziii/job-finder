import {all} from 'redux-saga/effects'
import root from './user'

export function* rootSaga() {
  yield all([root])
}