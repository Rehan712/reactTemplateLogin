import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import {
	ConnectedRouter as Router,
	Push,
	routerMiddleware
} from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const middleware = routerMiddleware(history);

import App from './components/App';

const store = createStore(
	rootReducer,
	process.env.NODE_ENV !== 'production' &&
		window.devToolsExtension &&
		window.devToolsExtension(),
	process.env.NODE_ENV !== 'production'
		? applyMiddleware(middleware, sagaMiddleware, logger)
		: applyMiddleware(middleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#app')
);
