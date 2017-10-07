import React from 'react';
import PropTypes from 'prop-types';
import ManageMapComponent from '../map/ManageMapComponent';
import Loading from '../common/Loading';

const RightPanel = ({loadingMap}) => {
    return (
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
    );
};

RightPanel.propTypes = {
    loadingMap: PropTypes.bool
};

export default RightPanel;