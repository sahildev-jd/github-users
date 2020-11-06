import { SET_ERROR, SET_USERS } from '../actions/actionTypes';

const initialState = {
	users: null,
	error: null,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS: {
			const updateUsers = action.value.slice();
			return { ...state, users: updateUsers };
		}
		case SET_ERROR: {
			return {
				...state,
				// We can use the error from the server too but not using for now.
				error:
					'Users could not be loaded. Please try again after some time',
			};
		}
		default:
			return state;
	}
};

export default usersReducer;
