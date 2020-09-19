import * as types from './action-types';

const initialState = {
    user: [],
    loading: false,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload.dataUser,
                error: ''
            }
        case types.FETCH_USER_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;