import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Profile = ({info, position}) => {
    return (
        <div className={'text-center'}>
            <img src={info.profile_picture} alt={'profile'} className={'img-circle'} />
            
            <br />
            <br />
            
            <a href={'https://www.instagram.com/' + info.username }>@{info.username}</a>
            
            <br />
            
            <p>{info.full_name}</p>

            { position && <Link to={'/details/'+ info.id + '/' + position.lat + '/' + position.lng}>ver posts</Link> }
        </div>
    );
}

Profile.propTypes = {
    info: PropTypes.object.isRequired,
    position: PropTypes.object
};

export default Profile;


