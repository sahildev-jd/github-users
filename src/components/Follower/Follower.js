import React from 'react';
import styled from 'styled-components';

const FollowerContainer = styled.div`
	display: flex;
	flex-flow: column;
`;
const ImageContainer = styled.div`
	width: 150px;
	min-height: 150px;
	max-height: auto;
	float: left;
	margin: 10px;
	border: 1px solid #ccc;
	box-shadow: 2px 2px #eee;
`;

const StyledImage = styled.img`
	max-width: 100%;
	height: auto;
`;

const Follower = (props) => {
	const { name, imageUrl } = props;

	return (
		<FollowerContainer>
			<ImageContainer>
				<StyledImage src={imageUrl} alt={name} />
			</ImageContainer>
			{name}
		</FollowerContainer>
	);
};

export default Follower;
