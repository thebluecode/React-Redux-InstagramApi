import React from 'react';
import PropTypes from 'prop-types';
const DetailsPage = ({medias}) => {
    return (
        <div>
            {medias && medias.map(media => <img key={media.id} src={media.images.standard_resolution.url} alt={'media'} />) }
        </div>
    );
};

DetailsPage.propTypes = {
    medias: PropTypes.array
};

export default DetailsPage;