import { SET_USERS, SET_ERROR, SET_FITER_VALUE } from './actionTypes';
import axios from '../../axios-github';

const onSetUsers = (data) => ({ type: SET_USERS, value: data });
const onSetError = (error) => ({ type: SET_ERROR, value: error });

export const onSetFilterValue = (v) => ({ type: SET_FITER_VALUE, value: v });

export const onGetUsers = (userId) => (dispatch) => {
	axios
		.get(`/users/${userId}/followers`)
		.then((response) => dispatch(onSetUsers(response.data)))
		.catch((error) => dispatch(onSetError(error)));
};
