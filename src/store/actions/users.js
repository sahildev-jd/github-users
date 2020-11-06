import { SET_USERS, SET_ERROR } from './actionTypes';

export const onSetUsers = (data) => ({ type: SET_USERS, value: data });

export const onSetError = (error) => ({ type: SET_ERROR, value: error });
