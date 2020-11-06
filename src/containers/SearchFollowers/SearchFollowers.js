import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/Search/Search';
import { onSetFilterValue } from '../../store/actions/followers';

const SearchFollowers = () => {
	const filterValueRef = useRef();
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.followers.userId);
	const setFilterValue = useCallback(
		(val) => dispatch(onSetFilterValue(val)),
		[dispatch]
	);

	useEffect(() => {
		filterValueRef.current.value = '';
	}, [userId]);

	const onChangeHandler = () => setFilterValue(filterValueRef.current.value);

	return (
		<Search
			placeholder="Filter the followers by user ID"
			onChange={onChangeHandler}
			parentRef={filterValueRef}
		/>
	);
};

export default SearchFollowers;
