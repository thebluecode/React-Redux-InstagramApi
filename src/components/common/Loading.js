import React from 'react';
import ReactLoading from 'react-loading';

const container = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    'z-index': 99999999999,
    'background-color': 'rgba(0,0,0,0.5)'
}

const Loading = ({display}) => {
    return (
        <div style={{ display: display ? 'inline' : 'none', ...container }}>
            <ReactLoading type={'bubbles'} color={'#444'} height='667px' width='375px' />
        </div>
    );
};

export default Loading;