import axios from '../../axios-github';
import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import User from '../../components/User/User';
import userData from '../../assets/users.json';

const Container = styled.div`
	display: flex;
	max-width: 80%;
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
	const [users, setUsers] = useState(null);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const usersPerPage = 4;

	useEffect(() => {
		// axios
		// 	.get(`/users/${userId}/followers`)
		// 	.then((response) => {
		const response = { data: userData };
		// console.log(response.data[1]);
		setUsers(response.data);
		// })
		// .catch((error) => {
		// 	setError(
		// 		'Users could not be loaded. Please try again after some time'
		// 	);
		// 	console.log(error);
		// });
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
			{!error && (
				<Container>
					<button onClick={previousButtonHandler}>Previous</button>
					<UsersContainer>
						{visibleUsers &&
							visibleUsers.map((u) => (
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
