import * as types from '../constants';

// getting Data Actions

export function getData() {
	return {
		type: types.GET_DATA
	};
}

export function getDataAttempt() {
	return {
		type: types.GET_DATA_ATTEMPT
	};
}

export function getDataSuccess(data) {
	return {
		type: types.GET_DATA_SUCCESS,
		payload: data
	};
}

export function getDataFail(error) {
	return {
		type: types.GET_DATA_FAIL,
		payload: error
	};
}

// submit Data Actions

export function submitData(data) {
	return {
		type: types.SUBMIT_DATA,
		payload: data
	};
}

export function submitDataAttempt() {
	return {
		type: types.SUBMIT_DATA_ATTEMPT
	};
}

export function submitDataSuccess() {
	return {
		type: types.SUBMIT_DATA_SUCCESS
	};
}

export function submitDataFail(error) {
	return {
		type: types.SUBMIT_DATA_FAIL,
		payload: error
	};
}

// text reset Actions and reset State actions

export function changeName(value) {
	return {
		type: types.CHANGE_NAME,
		payload: value
	};
}

export function changePassoword(value) {
	return {
		type: types.CHANGE_PASSWORD,
		payload: value
	};
}

export function resetState() {
	return {
		type: types.RESET_STATE
	};
}
