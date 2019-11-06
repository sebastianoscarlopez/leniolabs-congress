import { all } from 'redux-saga/effects'
import { fetchMembersSaga } from './membersSaga'

/* ------------- Connect Types To Sagas ------------- */
export default function* rootSaga() {
    yield all([
        fetchMembersSaga()
    ]);
}