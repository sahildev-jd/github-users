import axios from '../../axios-github';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import User from '../../components/User/User';
import userData from '../../assets/users.json';
import { useSelector, useDispatch } from 'react-redux';
import { onSetError, onSetUsers } from '../../store/actions/users';

const Container = styled.div`
	display: flex;
	margin: 0 80px;
	justify-content: center;
	align-items: center;
	border: 1px solid #ccc;
	box-shadow: 2px 2px #eee;
`;

const UsersContainer = styled.div`
	display: flex;
	flex-flow: row;
`;

const Users = (props) => {
	const { userId } = props;
	const users = useSelector((state) => state.users.users);
	const error = useSelector((state) => state.users.error);
	const dispatch = useDispatch();

	const setUsers = useCallback(
		(usersData) => dispatch(onSetUsers(usersData)),
		[dispatch]
	);
	const setError = useCallback((apiError) => dispatch(onSetError(apiError)), [
		dispatch,
	]);
	// const [users, setUsers] = useState(null);
	// const [error, setError] = useState(null);

	// Can handle this with redux but since its not going to be used anywhere,
	// I'll handle currentPage in the component itself
	const [currentPage, setCurrentPage] = useState(1);
	const usersPerPage = 4;

	useEffect(() => {
		// const response = { data: userData };
		axios
			.get(`/users/${userId}/followers`)
			.then((response) => setUsers(response.data))
			.catch((error) => setError(error));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId]);

	const nextButtonHandler = () => {
		if (currentPage < Math.ceil(users.length / usersPerPage)) {
			setCurrentPage((currPage) => currPage + 1);
		}
	};

	const previousButtonHandler = () => {
		if (currentPage > 1) {
			setCurrentPage((currPage) => currPage - 1);
		}
	};

	const firstIndex = (currentPage - 1) * usersPerPage;
	const lastIndex = currentPage * usersPerPage;
	const visibleUsers = users && users.slice(firstIndex, lastIndex);

	return (
		<Fragment>
			{error && <div>{error}</div>}
			{!error && visibleUsers && (
				<Container>
					<button onClick={previousButtonHandler}>Previous</button>
					<UsersContainer>
						{visibleUsers.map((u) => (
							<User
								key={u.id}
								name={u.login}
								imageUrl={u.avatar_url}
							/>
						))}
					</UsersContainer>
					<button onClick={nextButtonHandler}>Next</button>
				</Container>
			)}
		</Fragment>
	);
};

export default Users;
