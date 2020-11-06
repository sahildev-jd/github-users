import { SET_FOLLOWERS, SET_ERROR, SET_FITER_VALUE } from './actionTypes';
import axios from '../../axios-github';

const onSetFollowers = (data) => ({ type: SET_FOLLOWERS, value: data });
const onSetError = (error) => ({ type: SET_ERROR, value: error });

export const onSetFilterValue = (v) => ({ type: SET_FITER_VALUE, value: v });

export const onGetFollowers = (userId) => (dispatch) => {
	axios
		.get(`/users/${userId}/followers`)
		.then((response) => dispatch(onSetFollowers(response.data)))
		.catch((error) => dispatch(onSetError(error)));
};
