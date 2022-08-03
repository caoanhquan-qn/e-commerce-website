import { put, takeLatest, all, call } from 'redux-saga/effects';
import { fetchData, fetchInitialData } from './action';
import { START_FETCHING_DATA, START_FETCHING_INITIAL_DATA } from './actionTypes';
import getInitialData from '../data/section.data';
import getData from '../data/shop.data';

function* fetchDataAsync() {
  try {
    const data = yield call(getData);
    yield put(fetchData(data));
  } catch (error) {
    console.log(error);
  }
}
function* fetchInitialDataAsync() {
  try {
    const data = yield call(getInitialData);
    data.sort((a, b) => a.id - b.id);
    yield put(fetchInitialData(data));
  } catch (error) {
    console.log(error);
  }
}
function* onFetchInitialData() {
  yield takeLatest(START_FETCHING_INITIAL_DATA, fetchInitialDataAsync);
}
function* onFetchData() {
  yield takeLatest(START_FETCHING_DATA, fetchDataAsync);
}
function* rootSaga() {
  yield all([call(onFetchInitialData), call(onFetchData)]);
}
export default rootSaga;
