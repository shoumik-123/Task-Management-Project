import React from 'react';
import Loading from 'react-fullscreen-loading';
const FullScreenLoader = () => {
    return (
        <div>
            <Loading loading background="#e8e8e8" loaderColor="#000000" />
        </div>
    );
};

export default FullScreenLoader;