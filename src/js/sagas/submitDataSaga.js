import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as actions from '../actions';
import { push } from 'react-router-redux';

export function* getDataSaga(action) {
	const data = { ...action.payload };
	yield put(actions.submitDataAttempt());
	try {
		const res = yield call(api.submitDataApi, data);
		yield put(actions.submitDataSuccess());
		yield put(push('/students'));
	} catch (e) {
		yield put(actions.submitDataFail(e));
	}
}
