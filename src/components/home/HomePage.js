import React from 'react';
import PropTypes from 'prop-types';
import ManageLoginComponent from '../login/ManageLoginComponent';
import ManageMapComponent from '../map/ManageMapComponent';
import Profile from '../common/Profile';

const HomePage = ({userIsAuthorized, userInfo}) => {
    return (
        <div>
            <div className="row">
                <div className="App-panel col-lg-4">
                    <div className="App-panel-left row">
                        {userIsAuthorized ?
                            <Profile info={userInfo} />
                            :
                            <ManageLoginComponent />
                        }
                    </div>
                </div>
                <div className="App-panel col-lg-8">
                    <div className="App-panel-right row">
                        <ManageMapComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

HomePage.propTypes = {
    userIsAuthorized: PropTypes.bool,
    userInfo: PropTypes.object
};

export default HomePage;