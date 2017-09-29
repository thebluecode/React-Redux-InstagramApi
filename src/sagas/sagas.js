import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';

// Workers

export function* fetchUserAsync(action) {
    yield put({type: types.START_LOAD_USER_PROFILE_AJAX_CALL});
    try {
        // Get user data.
        const args = { params: { access_token: action.accessToken } };
        let response = yield call(axios.get, 'https://api.instagram.com/v1/users/self/', args);

        yield put({type: types.LOAD_USER_DATA_SUCCESS, user: response.data.data });

    } catch (error) {
        console.log('Error trying to fetch user data.', error);
        yield put({type: types.ERROR_LOAD_USER_PROFILE_AJAX_CALL});
    }
    yield put({type: types.FINISH_LOAD_USER_PROFILE_AJAX_CALL});
}

export function* fetchMediaAsync(action) {
    yield put({type: types.START_LOAD_MEDIA_AJAX_CALL});
    try {
        // Get locations by position.
        const args = {
            params: {
                lat: action.data.position.latitude,
                lng: action.data.position.longitude,
                access_token: action.data.accessToken,
                distance: 5000
            }
        };
        let medias = [];
        let mediasResponse = yield call(axios.get, 'https://api.instagram.com/v1/media/search', args);
        medias = [...medias, ...mediasResponse.data.data];

        yield put({type: types.LOAD_MEDIAS_SUCCESS, medias });

    } catch (error) {
        console.log('Error trying to fetch medias data.', error);
    }
    yield put({type: types.FINISH_LOAD_MEDIA_AJAX_CALL});
}

// Watchers

export function* watchLoginStatus() {
    yield takeEvery(types.LOGIN_SUCCEESS, fetchUserAsync);
}

export function* watchUserPosition() {
    yield takeEvery(types.REQUIRE_CURRENT_USER_POSITION_SUCCESS, fetchMediaAsync);
}

export function* watchMediaRequest() {
    yield takeEvery(types.FETCH_MEDIAS_REQUEST, fetchMediaAsync);
}

// This is an entry point to start all our sagas at once
export default function* rootSaga() {
    yield [
        watchLoginStatus(),
        watchUserPosition(),
        watchMediaRequest()
    ]
}