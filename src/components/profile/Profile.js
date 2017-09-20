import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Profile = ({user, position}) => {

    let linkToPosts = '';

    if (position)
    linkToPosts = '/details/'+ user.id + '/' + position.lat + '/' + position.lng;

    return (
        <div className={'text-center'}>
            <img src={user.profile_picture} alt={'profile logo'} className={'img-circle'} />
            <br />
            <br />
            
            <a href={'https://www.instagram.com/' + user.username }>@{user.username}</a>
            
            <br />
            
            <p>{user.full_name}</p>
                            
            { position && <Link to={linkToPosts}>ver posts</Link> }
        </div>
    );
    
}

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    position: PropTypes.objec
};

export default Profile;


