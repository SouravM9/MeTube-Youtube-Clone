import React, { useState, useEffect } from 'react'
import "./VideoRow.css"

function ConvertViews(views) {
    if (Math.floor(views / 1e9) > 0) {
        let v = views / 1e9;
        return (v.toFixed(1) + "B views");
    }
    else if (Math.floor(views / 1e6) > 0) {
        let v = views / 1e6;
        return (v.toFixed(1) + "M views");
    }
    else if (Math.floor(views / 1e3) > 0) {
        return (Math.floor(views / 1e3) + "K views");
    }
    else {
        return (views + " views");
    }
}


function VideoRow({ views, description, timestamp, channel, title, image }) {
    const [view, setView] = useState('');

    useEffect(() => {
        setView(ConvertViews(views));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='videoRow'>
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className='videoRow__headline'>
                    {channel} • {view} • {timestamp}
                </p>
                <p className='videoRow__description'>{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
