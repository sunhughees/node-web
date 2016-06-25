import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {

	handleChange(e) {
		const user = e.target.value;
		this.props.changeUser(user);
	}

	render() {
		return (
			<div>
				<Title user={this.props.user}/>
				<input value={this.props.user} onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}
