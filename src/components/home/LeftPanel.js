import React from 'react';
import PropTypes from 'prop-types';
import ManageLoginComponent from '../login/ManageLoginComponent';
import Profile from '../common/Profile';
import Loading from '../common/Loading';

const LeftPanel = ({userIsAuthorized, loadingUserProfile, userInfo}) => {
    return (
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
    );
};

LeftPanel.propTypes = {
    userIsAuthorized: PropTypes.bool,
    loadingUserProfile: PropTypes.bool,
    userInfo: PropTypes.object
};

export default LeftPanel;