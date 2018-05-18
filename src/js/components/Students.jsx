import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Students extends React.Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		const { data } = this.props.data;
		return (
			<div className="students">
				<div>Name: {data.length && data[0].name}</div>
				<div>Password: {data.length && data[0].password}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data
	};
}

export default connect(mapStateToProps, { getData: actions.getData })(Students);

Students.propTypes = {
	//getAction: PropTypes.func.isRequired
};
