import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

const FullScreenLoader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress + 1) % 100);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="fullscreen-loader">
                <div className="overlay" />
                <LoadingBar
                    color="#3498db"
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
            </div>
        </div>
    );
};

export default FullScreenLoader;
