import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import Followers from './containers/Followers/Followers';

function App() {
	const userId = 'fabpot';

	return (
		<div className="App">
			<h1>Github followers of user: {userId}</h1>
			<Search />
			<Followers userId={userId} />
		</div>
	);
}

export default App;
