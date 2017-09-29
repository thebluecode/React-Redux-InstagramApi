import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div style={{ 'margin-top': '20%', 'margin-left': '20%' }}>
            <ReactLoading type={'bubbles'} color={'#444'} height='300px' width='300px' />
        </div>
    );
};

export default Loading;