export function mediasFormatedForMapMarkers(medias) {
    return medias.map(media => {
        return {
            id: media.id,
            info: media.user,
            position: { lat: media.location.latitude, lng: media.location.longitude }
        };
    });
}