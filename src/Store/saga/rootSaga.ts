import {all} from 'redux-saga/effects'
import root from './index'

export function* rootSaga() {
  yield all([root])
}