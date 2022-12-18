import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isShow: false
		}
		this.handleBtnClick = this.handleBtnClick.bind(this);
	};
	handleBtnClick() {
		this.setState({ isShow: true })

	}
	render() {
		return (
			<div id="main">

				{ /* Do not remove this main div!! */}
				<button id="click" onClick={this.handleBtnClick}>Click me</button>
				{this.state.isShow && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
			</div>

		);
	}
}


export default App;

