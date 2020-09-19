import axios from 'axios';
import * as types from './action-types';
import config from '../config.json';

export const fetchUser = () => {
    return (dispactch) => {
        dispactch(fetchUserRequest)
        axios.get(`${config.config.userUrlBase}`)
            .then(response => {
                const dataUser = response.data.data;
                dispactch(fetchUserSucces(dataUser))
            })
            .catch(error => {
                const errorMsg = error.payload
                dispactch(fetchUserFailure(errorMsg))
            })
    }
}

export const fetchUserSucces = (dataUser) => {
    return {
        type: types.FETCH_USER_SUCCESS,
        payload: {
            dataUser,
        }
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: types.FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUserRequest = (error) => {
    return {
        type: types.FETCH_USER_REQUEST,
        error
    }
}


export default { fetchUser, fetchUserSucces, fetchUserFailure, fetchUserRequest }
