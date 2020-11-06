import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	color: #5C9210;
	outline: none;
	cursor: pointer;
	font: inherit;
	padding: 10px !important;
	margin: 10px !important;
	font-weight: bold;
`;

const Button = (props) => {
	const { onClick } = props;

	return <StyledButton onClick={onClick}>{props.children}</StyledButton>;
};

export default Button;
