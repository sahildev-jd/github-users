import React from 'react';
import './App.css';
import Users from './containers/Users/Users';

function App() {
	const userId = 'fabpot';

	return (
		<div className="App">
			<h1>Github users for follower</h1>
			<Users userId={userId} />
		</div>
	);
}

export default App;
