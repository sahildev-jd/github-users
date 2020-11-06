import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import Followers from './containers/Followers/Followers';
import UserSearch from './containers/UserSearch/UserSearch';

function App() {
	const userId = useSelector((state) => state.followers.userId);

	return (
		<div className="App">
			<h1>Github followers of user: {userId}</h1>
			<UserSearch />
			<Followers userId={userId} />
		</div>
	);
}

export default App;
