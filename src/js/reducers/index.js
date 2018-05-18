import { combineReducers } from 'redux';
import getDataReducer from './getDataReducer';
import textFieldsReducer from './textFieldsReducer';

const rootReducer = combineReducers({
	data: getDataReducer,
	inputData: textFieldsReducer
});

export default rootReducer;
