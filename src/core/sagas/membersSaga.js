import { call, put, takeLatest, debounce } from 'redux-saga/effects'
import { fetchMembersSuccess, fetchMembersFailure } from '../actions/membersContainerActions'

import { FETCH_CONGRESS_REQUEST, FETCH_CONGRESS_SUCCESS, FETCH_CONGRESS_FAILURE } from '../constants'

import congressApi from '../services/congressApi'

function* fetchMembers(action){
    console.log('saga/fetchMembers');
    try{
        const response = yield call(congressApi.listOfMembers, action.payload);
        if(response.status === 200){
            yield put(fetchMembersSuccess(response.data));
        }else{
            yield put(fetchMembersFailure());
        }
    }catch(error){
        yield put(fetchMembersFailure(error.message));
    }
}

export function* fetchMembersSaga () {
    yield debounce(1000, FETCH_CONGRESS_REQUEST, fetchMembers);
}