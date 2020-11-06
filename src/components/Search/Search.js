import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { onSetFilterValue } from '../../store/actions/users';

const StyledInput = styled.input`
	height: 30px;
	width: 300px;
	padding: 5px;
	box-sizing: border-box;
	margin: 10px 20px;
`;
const SearchContainer = styled.div``;

const Search = () => {
	const dispatch = useDispatch();
	const setFilterValue = useCallback(
		(val) => dispatch(onSetFilterValue(val)),
		[dispatch]
	);

	const onChangeHandler = (e) => {
		setFilterValue(e.target.value);
	};

	return (
		<SearchContainer>
			<StyledInput
				placeholder="Filter the followers by user ID"
				onChange={onChangeHandler}
			/>
		</SearchContainer>
	);
};

export default Search;
