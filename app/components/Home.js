import React, { Component } from 'react';

import TextEdit from '../components/contentEditable';

class Home extends Component {
	render() {
		const styleDiv = {
			margin: '5% auto',
			width: '400px'
		};
		const styleH1 = {
			textAlign: 'center',
			fontSize: '40px'
		};
		return (
			<div style={styleDiv}>
				<h1 style={styleH1}>Editor Text React</h1>
				<TextEdit />
				<div>
					<h3> shortcuts</h3>
					<p>cmd + b / ctrl + b</p>
					<p>cmd + i / ctrl + i </p>
					<p>cmd + u / ctrl + u</p>
				</div>
			</div>
		);
	}
}

export default Home;
