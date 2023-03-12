import React, { useState, useEffect } from 'react'
import Avatar from "@mui/material/Avatar";
import "./VideoCard.css"

function ConvertViews(views) { 
    if (Math.floor(views / 1000000) > 0) {
        let v = views / 1000000;
        return (v.toFixed(1) + "M views");
    }
    else if (Math.floor(views / 1000) > 0) {
        return (Math.floor(views / 1000) + "K views");
    }
    else {
        return (views + " views");
    }
}

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {

    const [view, setView] = useState('');

    useEffect(() => {
        setView(ConvertViews(views));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <div className='videoCard'>
            <img className="videoCard__thumbnail" src={image} alt="" />
            <div className='videoCard__info'>
                <Avatar
                    className="videoCard__avatar"
                    alt={channel}
                    src={channelImage} />

                <div className='videoCard__text'>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {view} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
