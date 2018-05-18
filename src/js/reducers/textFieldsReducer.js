import * as types from '../constants';

const initial = {
	name: '',
	password: ''
};

export default function textFieldsReducer(state = initial, action) {
	switch (action.type) {
		case types.CHANGE_NAME:
			return { ...state, name: action.paylaod };
		case types.CHANGE_PASSWORD:
			return { ...state, password: action.paylaod };
		case types.RESET_STATE:
			return { ...state, name: '', password: '' };
		default:
			return state;
	}
}
