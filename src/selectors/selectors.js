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