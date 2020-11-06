import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import Users from './containers/Users/Users';

function App() {
	const userId = 'fabpot';

	return (
		<div className="App">
			<h1>Github followers of user: {userId}</h1>
			<Search />
			<Users userId={userId} />
		</div>
	);
}

export default App;
