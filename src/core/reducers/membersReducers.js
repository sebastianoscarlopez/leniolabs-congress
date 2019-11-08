import Immutable from 'seamless-immutable';

import { FETCH_CONGRESS_REQUEST, FETCH_CONGRESS_SUCCESS, FETCH_CONGRESS_FAILURE } from '../constants';

const INTIAL_STATE = Immutable({
    members: [],
    isFetching: false,
    errorMessage: ''
});

export default function membersReducers(state = INTIAL_STATE, action){
    switch(action.type){
        case FETCH_CONGRESS_REQUEST:
            return state.merge({
                members: [],
                isFetching: true,
                errorMessage: ''
            });
        case FETCH_CONGRESS_SUCCESS:
            return state.merge({
                members: action.payload,
                isFetching: false
            });
        case FETCH_CONGRESS_FAILURE:
            return state.merge({
                isFetching:false,
                errorMessage: action.payload
            })
        default:
            return state;
    }
}

