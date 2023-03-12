import React from 'react';
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./ChannelRow.css"

function ChannelRow({ image, Channel, verified, subs, noOfVideos, description }) {
    return (
        <div className='channelRow'>
            <Avatar className="channelRow__logo"
                alt={Channel}
                src={image} />

            <div className="channelRow__text">
                <h4>{Channel} {verified && <CheckCircleIcon/>} </h4>

                <p>
                {subs} • {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ChannelRow
