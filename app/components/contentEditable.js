import React from 'react';

const textEdit = () => (
	<div>
		<p id="pp" style={textStyle} contentEditable="true">
			text
		</p>
	</div>
);
onkeydown = e => {
	if (e.ctrlKey && e.keyCode == 'B'.charCodeAt(0)) {
		e.preventDefault();
		let text = document.getElementById('pp').copy;
		let bold = window.getSelection().toString();
		//Todo:
		document.getElementById('pp').innerHTML = bold.bold();
		console.log(bold.bold());
	}
	if (e.ctrlKey && e.keyCode == 'I'.charCodeAt(0)) {
		e.preventDefault();
		let ita = window.getSelection().toString();
		//Todo:

		document.getElementById('pp').innerHTML = ita.italics();
		console.log(ita.italics());
	}
	//Todo:

	if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
		e.preventDefault();
	}
};

const textStyle = {
	border: '2px solid #ff9e55',
	borderRadius: '4px',
	padding: '10px',
	minHeight: '300px'
};

export default textEdit;
