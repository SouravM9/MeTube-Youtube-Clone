import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj"
                Channel="Sony Pictures Entertainment"
                verified
                subs="6.45M"
                noOfVideos={4406}
                description="Welcome to the official channel for Sony Pictures Entertainment."
            />
            <hr />

            <VideoRow
                image="https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg"
                title="SPIDER-MAN: NO WAY HOME-Offical Trailer(HD)"
                channel="Sony Pictures Entertainment"
                views="77M views"
                timestamp="10 months ago"
                channelImage="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj"
                description="We started getting visistors... from every universe. Watch the official trailer for #SpiderManNoWayHome"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg"
                title="SPIDER-MAN: NO WAY HOME-Offical Trailer(HD)"
                channel="Sony Pictures Entertainment"
                views="77M views"
                timestamp="10 months ago"
                channelImage="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj"
                description="We started getting visistors... from every universe. Watch the official trailer for #SpiderManNoWayHome"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg"
                title="SPIDER-MAN: NO WAY HOME-Offical Trailer(HD)"
                channel="Sony Pictures Entertainment"
                views="77M views"
                timestamp="10 months ago"
                channelImage="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj"
                description="We started getting visistors... from every universe. Watch the official trailer for #SpiderManNoWayHome"
            />
            <VideoRow
                image="https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg"
                title="SPIDER-MAN: NO WAY HOME-Offical Trailer(HD)"
                channel="Sony Pictures Entertainment"
                views="77M views"
                timestamp="10 months ago"
                channelImage="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj"
                description="We started getting visistors... from every universe. Watch the official trailer for #SpiderManNoWayHome"
            />
        </div>
    )
}

export default SearchPage
