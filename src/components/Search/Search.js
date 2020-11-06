import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	height: 30px;
	width: 300px;
	padding: 5px;
	box-sizing: border-box;
	margin: 10px 20px;
`;
const SearchContainer = styled.div``;

const Search = (props) => {
	const { onChange, placeholder, parentRef } = props;

	return (
		<SearchContainer>
			<StyledInput
				placeholder={placeholder}
				onChange={onChange}
				ref={parentRef}
			/>
		</SearchContainer>
	);
};

export default Search;
