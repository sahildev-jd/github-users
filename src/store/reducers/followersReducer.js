import {
	SET_ERROR,
	SET_FITER_VALUE,
	SET_FOLLOWERS,
	SET_USER_ID,
} from '../actions/actionTypes';

const initialState = {
	userId: '',
	followers: null,
	error: null,
	filterValue: '',
};

const followersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FOLLOWERS:
			return { ...state, followers: action.value.slice() };

		case SET_ERROR:
			return {
				...state,
				// We can use the error from the server too but not using for now.
				error:
					'Followers could not be loaded. Please try again after some time',
			};

		case SET_FITER_VALUE:
			return { ...state, filterValue: action.value };

		case SET_USER_ID:
			return { ...state, userId: action.value };

		default:
			return state;
	}
};

export default followersReducer;
