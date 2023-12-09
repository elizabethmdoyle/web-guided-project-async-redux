import axios from 'axios';

export const GET_PERSON = "GET_PERSON";
export const GET_PERSON_SUCCESS = "GET_PERSON_SUCCESS";
export const GET_PERSON_ERROR = "GET_PERSON_ERROR";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

export const getPerson = (dispatch) => {
    dispatch(setIsFetching(true))
    axios.get(`http://randomuser.me/api`)
        .then(res => {
            console.log(res)
            const person = res.data.results[0];
            dispatch(getPersonSuccess(person))
        }, (error) => {
            const message = error.message;
            dispatch(getPersonError(message))
        
        })

    return {type: GET_PERSON, payload: {data: 'hello'}}
}



export const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, isFetching: action.payload }
}

export const getPersonSuccess = () => {
    return {type: GET_PERSON_SUCCESS, isFetching: false, person: action.payload}
}

export const getPersonError = (error) => {
    return {type: GET_PERSON_ERROR, payload: error.message}
}

