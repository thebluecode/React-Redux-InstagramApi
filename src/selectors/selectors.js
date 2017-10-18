import lodash from 'lodash';

export function mediasFormatedForMapMarkers(medias) {
    return medias.map(media => {
        return {
            id: media.id,
            info: media.user,
            position: { lat: media.location.latitude, lng: media.location.longitude }
        };
    });
}

export function filterMedias(medias, filter) {
    let filteredMedias = [];
    
    if (medias) {
        filteredMedias = [...filteredMedias,
                            ...medias.filter(media => media.user.id === filter.userId &&
                                                      media.location.latitude === Number.parseFloat(filter.lat) &&
                                                      media.location.longitude === Number.parseFloat(filter.lng))];
    }

    return filteredMedias;
}

export function filterMarkersByPosition(markers, position) {
    return markers.filter(marker => marker.position.lat === position.lat &&
                                    marker.position.lng === position.lng);
}

export function groupMarkersByUser(markers) {
    return lodash.chain(markers)
                 .groupBy(marker => marker.info.id)
                 .map(function(val, key) {
                     return {
                         id: parseInt(key),
                         info: val[0].info
                     };
                 }).value();
}

export function formatMediasToGroupedProfilesByActivePosition(medias, position) {
    let markers = mediasFormatedForMapMarkers(medias);
    let filtered = filterMarkersByPosition(markers, position);
    let profiles = groupMarkersByUser(filtered);
    return profiles;
}