import React from 'react';

const textEdit = () => (
	<div>
		<p style={textStyle} contentEditable="true">
			Paste your text to edit...
		</p>
	</div>
);

const textStyle = {
	border: '2px solid #ff9e55',
	borderRadius: '4px',
	padding: '10px',
	minHeight: '300px'
};

export default textEdit;
