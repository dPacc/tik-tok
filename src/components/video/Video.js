import React from 'react';
import './Video.css';

export default function Video() {
    return (
        <div className="video">
            <video 
                className="video__player"
                loop 
                src="https://www.youtube.com/watch?v=g8yGxDMyGiE">

            </video>
        </div>
    )
}
