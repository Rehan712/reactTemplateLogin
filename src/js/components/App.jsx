import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import Students from './Students';
import Home from './Home';
import { Switch, Route, Link } from 'react-router-dom';

const App = () => (
	<div className="app">
		<Link to="/" style={{ margin: 50 }}>
			Home
		</Link>
		<Link to="/login" style={{ margin: 50 }}>
			Login
		</Link>
		<Link to="/students" style={{ margin: 50 }}>
			Students
		</Link>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/students" component={Students} />
		</Switch>
	</div>
);

export default App;
