import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
	width: 150px;
	min-height: 150px;
	max-height: auto;
	float: left;
	margin: 3px;
	padding: 3px;
`;

const StyledImage = styled.img`
	max-width: 100%;
	height: auto;
`;

const User = (props) => {
	const { name, imageUrl } = props;

	return (
		<div>
			<ImageContainer>
				<StyledImage src={imageUrl} alt={name} />
			</ImageContainer>
		</div>
	);
};

export default User;