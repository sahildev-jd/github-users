import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Search from '../../components/Search/Search';
import Button from '../../components/UI/Button/Button';
import { onGetFollowers } from '../../store/actions/followers';

const SearchContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const UserSearch = () => {
	const userIdRef = useRef();
	const userId = useSelector((state) => state.followers.userId);

	const dispatch = useDispatch();
	const getFollowers = useCallback((val) => dispatch(onGetFollowers(val)), [
		dispatch,
	]);

	useEffect(() => {
		userIdRef.current.value = '';
	}, [userId]);

	return (
		<SearchContainer>
			<Search
				placeholder="Enter the user ID to get followers"
				parentRef={userIdRef}
			/>
			<Button onClick={() => getFollowers(userIdRef.current.value)}>
				Go
			</Button>
		</SearchContainer>
	);
};

export default UserSearch;
