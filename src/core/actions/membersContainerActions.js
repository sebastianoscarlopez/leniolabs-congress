import { FETCH_CONGRESS_REQUEST, FETCH_CONGRESS_SUCCESS, FETCH_CONGRESS_FAILURE } from '../constants';

export function fetchMembers(filters) {
    return {
        type: FETCH_CONGRESS_REQUEST,
        payload: filters
    }
}

export function fetchMembersSuccess(data) {
    return {
        type: FETCH_CONGRESS_SUCCESS,
        payload: data
    }
}

export function fetchMembersFailure(message) {
    return {
        type: FETCH_CONGRESS_FAILURE,
        payload: message
    }
}
