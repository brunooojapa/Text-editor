import React from 'react';

const textEdit = () => (
	<div>
		<p id="pp" style={textStyle} contentEditable="true">
			lorem20khoihio iohoi iuoi oi io iouoi
		</p>
	</div>
);
onkeydown = e => {
	if (e.ctrlKey && e.keyCode == 'B'.charCodeAt(0)) {
		e.preventDefault();
		let text = document.getElementById('pp').innerHTML;
		let bold = window.getSelection().toString();
		//Todo:
		console.log(bold);

		let result = text.replace(bold, bold.bold());
		document.getElementById('pp').innerHTML = result.toString();
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
		let text = document.getElementById('pp').copy;
		let underlined = window.getSelection().toString();
		var x = document.createElement('U');
		var t = document.createTextNode(underlined);
		x.appendChild(t);
		document.getElementById('pp').innerHTML = '';
		document.getElementById('pp').appendChild(x);
	}
};

const textStyle = {
	border: '2px solid #ff9e55',
	borderRadius: '4px',
	padding: '10px',
	minHeight: '300px'
};

export default textEdit;
