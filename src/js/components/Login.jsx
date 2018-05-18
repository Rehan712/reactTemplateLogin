import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class Login extends React.Component {
	constructor() {
		super();
	}
	render() {
		const {
			inputData,
			submitData,
			changeName,
			changePassword,
			resetState
		} = this.props;
		return (
			<div className="login">
				<form
					onSubmit={e => {
						e.preventDefault();
						submitData(inputData);
						resetState();
					}}
				>
					<TextField
						type="search"
						label="Name"
						onChange={e => {
							changeName(e.target.value);
						}}
						value={inputData.name}
					/>
					<TextField
						type="search"
						label="Password"
						onChange={e => {
							changePassword(e.target.value);
						}}
						value={inputData.password}
					/>
					<Button color="primary">Submit</Button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		inputData: state.inputData
	};
}

export default connect(mapStateToProps, {
	submitData: actions.submitData,
	changeName: actions.changeName,
	changePassword: actions.changePassword,
	resetState: actions.resetState
})(Login);

Login.propTypes = {
	//getAction: PropTypes.func.isRequired
};
