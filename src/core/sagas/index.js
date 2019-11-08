import { all } from 'redux-saga/effects'
import { fetchMembersContainerSaga } from './membersContainerSaga'

/* ------------- Connect Types To Sagas ------------- */
export default function* rootSaga() {
    yield all([
        fetchMembersContainerSaga()
    ]);
}