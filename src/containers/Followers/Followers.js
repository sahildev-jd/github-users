import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Follower from '../../components/Follower/Follower';
import { useSelector } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import SearchFollowers from '../SearchFollowers/SearchFollowers';

const Container = styled.div`
	display: flex;
	margin: 0 80px;
	justify-content: center;
	align-items: center;
	border: 1px solid #ccc;
	box-shadow: 2px 2px #eee;
	height: 220px;
`;

const FollowersContainer = styled.div`
	display: flex;
	flex-flow: row;
	width: 690px;
`;

const Followers = () => {
	const followers = useSelector((state) => state.followers.followers);
	const error = useSelector((state) => state.followers.error);
	const filterValue = useSelector((state) => state.followers.filterValue);

	// Can handle this with redux but since its not going to be used anywhere,
	// I'll handle currentPage in the component itself
	const [currentPage, setCurrentPage] = useState(1);
	const followersPerPage = 4;

	const nextButtonHandler = () => {
		if (currentPage < Math.ceil(followers.length / followersPerPage)) {
			setCurrentPage((currPage) => currPage + 1);
		}
	};

	const previousButtonHandler = () => {
		if (currentPage > 1) {
			setCurrentPage((currPage) => currPage - 1);
		}
	};
	const firstIndex = (currentPage - 1) * followersPerPage;
	const lastIndex = currentPage * followersPerPage;
	const visibleFollowers =
		followers &&
		followers
			.filter((u) => u.login.includes(filterValue))
			.slice(firstIndex, lastIndex);

	return (
		<Fragment>
			{error && <div>{error}</div>}
			{!error && visibleFollowers && (
				<Fragment>
					{' '}
					<Container>
						<Button onClick={previousButtonHandler}>
							Previous
						</Button>
						<FollowersContainer>
							{visibleFollowers.map((u) => (
								<Follower
									key={u.id}
									name={u.login}
									imageUrl={u.avatar_url}
								/>
							))}
						</FollowersContainer>
						<Button onClick={nextButtonHandler}>Next</Button>
					</Container>
					<SearchFollowers />
				</Fragment>
			)}
		</Fragment>
	);
};

export default Followers;
