import * as types from './actionTypes';

export function selectMarker(selectedMarker) {
    return { type: types.SELECT_MARKER, selectedMarker };
}