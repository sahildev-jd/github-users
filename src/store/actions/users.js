import { SET_USERS, SET_ERROR, SET_FITER_VALUE } from './actionTypes';

export const onSetUsers = (data) => ({ type: SET_USERS, value: data });

export const onSetError = (error) => ({ type: SET_ERROR, value: error });
export const onSetFilterValue = (v) => ({ type: SET_FITER_VALUE, value: v });