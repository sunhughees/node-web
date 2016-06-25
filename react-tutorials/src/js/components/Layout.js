import React from "react";

import Header from "./Header";
import Footer from "./Footer"

export default class Layout extends React.Component {
	constructor() {
	  super();
	  this.state = {
	  	user: "Sun"
	  };
	}
	
	changeUser(user) {
		this.setState({user});
	}

	render() {
		return (
			<div>
				<Header changeUser={this.changeUser.bind(this)} user={this.state.user} />
				<Footer />
			</div>
		);
	}
}
