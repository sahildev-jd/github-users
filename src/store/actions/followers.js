import {
	SET_FOLLOWERS,
	SET_ERROR,
	SET_FITER_VALUE,
	SET_USER_ID,
} from './actionTypes';
import axios from '../../axios-github';

const onSetFollowers = (data) => ({ type: SET_FOLLOWERS, value: data });
const onSetError = (error) => ({ type: SET_ERROR, value: error });

export const onSetUserId = (id) => ({ type: SET_USER_ID, value: id });
export const onSetFilterValue = (v) => ({ type: SET_FITER_VALUE, value: v });

export const onGetFollowers = (userId) => (dispatch) => {
	axios
		.get(`/users/${userId}/followers`)
		.then((response) => {
			dispatch(onSetUserId(userId));
			dispatch(onSetFollowers(response.data));
			dispatch(onSetFilterValue(''));
		})
		.catch((error) => dispatch(onSetError(error)));
};
