import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as actions from '../actions';

export default function* getDataSaga() {
	yield put(actions.getDataAttempt());
	try {
		const res = yield call(api.getDataApi);
		yield put(actions.getDataSuccess(res));
	} catch (e) {
		yield put(actions.getDataFail(e));
	}
}
