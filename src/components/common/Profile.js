import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({info}) => {
    return (
        <div className={'text-center'}>
            <img src={info.profile_picture} alt={'profile'} className={'img-circle'} />
            
            <br />
            <br />
            
            <a href={'https://www.instagram.com/' + info.username }>@{info.username}</a>
            
            <br />
            
            <p>{info.full_name}</p>
        </div>
    );
}

Profile.propTypes = {
    info: PropTypes.object.isRequired
};

export default Profile;