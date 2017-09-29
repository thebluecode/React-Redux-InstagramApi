import React from 'react';
import PropTypes from 'prop-types';
import ManageLoginComponent from '../login/ManageLoginComponent';
import ManageMapComponent from '../map/ManageMapComponent';
import Profile from '../common/Profile';
import Loading from '../common/Loading';

const HomePage = ({userIsAuthorized, userInfo, loadingUserProfile, loadingMap}) => {
    return (
        <div>
            <div className="row">
                <div className="App-panel col-lg-4">
                    <div className="App-panel-left row">
                        {
                            userIsAuthorized ?

                                loadingUserProfile ?
                                <Loading />
                                :
                                <Profile info={userInfo} />

                            :
                            <ManageLoginComponent />
                        }
                    </div>
                </div>
                <div className="App-panel col-lg-8">
                    <div className="App-panel-right row">
                        {
                            loadingMap ?
                            <Loading />
                            :
                            <ManageMapComponent />
                        }
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