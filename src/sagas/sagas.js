import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';

// Workers

export function* fetchUserAsync(action) {
    try {
        // Get user data.
        const args = { params: { access_token: action.accessToken } };
        let response = yield call(axios.get, 'https://api.instagram.com/v1/users/self/', args);

        yield put({type: types.LOAD_USER_DATA_SUCCESS, user: response.data.data });

    } catch (error) {
        console.log('Error trying to fetch user data.', error);
    }
}

export function* fetchMediaAsync(action) {
    try {
        // Get locations by position.
        const args = {
            params: {
                lat: action.data.position.latitude,
                lng: action.data.position.longitude,
                access_token: action.data.accessToken
            }
        };
        let locationsResponse = yield call(axios.get, 'https://api.instagram.com/v1/locations/search/', args);
        let locations = locationsResponse.data.data;

        // Get recent medias by location
        let medias = [];
        for (let location of locations) {
            let mediasResponse = yield call(axios.get, 'https://api.instagram.com/v1/locations/'+ location.id +'/media/recent', { params: { access_token: action.data.accessToken } });
            
            if (mediasResponse.data.data.length > 0)
                medias = [...medias, ...mediasResponse.data.data];
        }

        yield put({type: types.LOAD_MEDIAS_SUCCESS, medias });

    } catch (error) {
        console.log('Error trying to fetch medias data.', error);
    }
}

// Watchers

export function* watchLoginStatus() {
    yield takeEvery(types.LOGIN_SUCCEESS, fetchUserAsync);
}

export function* watchUserPosition() {
    yield takeEvery(types.REQUIRE_CURRENT_USER_POSITION_SUCCESS, fetchMediaAsync);
}

// This is an entry point to start all our sagas at once
export default function* rootSaga() {
    yield [
        watchLoginStatus(),
        watchUserPosition()
    ]
}