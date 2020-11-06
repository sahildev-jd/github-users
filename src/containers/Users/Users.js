import React, { Fragment, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import User from '../../components/User/User';
import { useSelector, useDispatch } from 'react-redux';
import { onGetUsers } from '../../store/actions/users';
import Button from '../../components/UI/Button/Button';

const Container = styled.div`
	display: flex;
	margin: 0 80px;
	justify-content: center;
	align-items: center;
	border: 1px solid #ccc;
	box-shadow: 2px 2px #eee;
	height: 180px;
`;

const UsersContainer = styled.div`
	display: flex;
	flex-flow: row;
	width: 690px;
`;

const Users = (props) => {
	const { userId } = props;
	const users = useSelector((state) => state.users.users);
	const error = useSelector((state) => state.users.error);
	const filterValue = useSelector((state) => state.users.filterValue);

	const dispatch = useDispatch();
	const getUsers = useCallback((userId) => dispatch(onGetUsers(userId)), [
		dispatch,
	]);

	// Can handle this with redux but since its not going to be used anywhere,
	// I'll handle currentPage in the component itself
	const [currentPage, setCurrentPage] = useState(1);
	const usersPerPage = 4;

	useEffect(() => {
		getUsers(userId);
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
	const visibleUsers =
		users &&
		users
			.filter((u) => u.login.includes(filterValue))
			.slice(firstIndex, lastIndex);

	return (
		<Fragment>
			{error && <div>{error}</div>}
			{!error && visibleUsers && (
				<Container>
					<Button onClick={previousButtonHandler}>Previous</Button>
					<UsersContainer>
						{visibleUsers.map((u) => (
							<User
								key={u.id}
								name={u.login}
								imageUrl={u.avatar_url}
							/>
						))}
					</UsersContainer>
					<Button onClick={nextButtonHandler}>Next</Button>
				</Container>
			)}
		</Fragment>
	);
};

export default Users;
