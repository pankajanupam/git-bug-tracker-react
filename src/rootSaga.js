import { delay } from 'redux-saga';
import { put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { API_CALL_GET_BUG_LIST, BUG_LIST_RECEIVED } from "./constants";

function* listRecived() {
  yield put({ bugList: [] })
}


function* watchIncrementAsync() {
  yield takeLatest(BUG_LIST_RECEIVED, listRecived)
}


// merge more then one saga
export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}