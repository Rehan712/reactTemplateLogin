import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
	constructor() {
		super();
	}
	render() {
		return <div className="home">This is a home component</div>;
	}
}

export default Home;

Home.propTypes = {
	//getAction: PropTypes.func.isRequired
};
