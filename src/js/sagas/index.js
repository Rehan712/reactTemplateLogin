import { all, fork, takeLatest } from 'redux-saga/effects';
import getDataSaga from './getDataSaga';
import submitDataSaga from './submitDataSaga';
import * as types from '../constants';

function* watchGetData() {
	yield takeLatest(types.GET_DATA, getDataSaga);
}

function* watchSubmitData() {
	yield takeLatest(types.SUBMIT_DATA, submitDataSaga);
}

export default function* rootSaga() {
	yield all([fork(watchGetData), fork(watchSubmitData)]);
}
