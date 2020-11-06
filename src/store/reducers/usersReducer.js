import { SET_ERROR, SET_FITER_VALUE, SET_USERS } from '../actions/actionTypes';

const initialState = {
	users: null,
	error: null,
	filterValue: '',
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: action.value.slice() };

		case SET_ERROR:
			return {
				...state,
				// We can use the error from the server too but not using for now.
				error:
					'Users could not be loaded. Please try again after some time',
			};

		case SET_FITER_VALUE:
			return { ...state, filterValue: action.value };

		default:
			return state;
	}
};

export default usersReducer;
