import * as types from './actionTypes';

export function fetchMedias(data) {
    return {
        type: types.FETCH_MEDIAS_REQUEST,
        data: {
            position: {
                latitude: data.lat,
                longitude: data.lng,
            },
            accessToken: data.accessToken
        }
    };
}