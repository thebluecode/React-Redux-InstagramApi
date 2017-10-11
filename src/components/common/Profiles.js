import React from "react"
import PropTypes from 'prop-types';
import Profile from './Profile';
import { BrowserRouter, Link } from 'react-router-dom';

const Profiles = ({profiles, position}) => {
    return (
        <div className={'text-center'}>
            {profiles.map(profile =>
                <div key={profile.id} >
                    <Profile
                        key={profile.id}
                        info={profile.info}
                        position={position} />

                        <BrowserRouter>
                            <Link className="btn btn-primary" to={'/details/' + profile.info.id + '/' + position.lat + '/' + position.lng}>ver posts</Link>
                        </BrowserRouter>
                        <br/>
                        <br/>
                </div>)
            }
        </div>
    );
}

Profiles.propTypes = {
    profiles: PropTypes.array,
    position: PropTypes.object.isRequired
};

export default Profiles;