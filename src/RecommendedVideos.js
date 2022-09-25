import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard image="https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg"
          title="SPIDER-MAN: NO WAY HOME-Offical Trailer(HD)"
          channel="Sony Pictures Entertainment"
          views="77M views"
          timestamp="10 months ago"
          channelImage="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard image="https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg"
          title="SPIDER-MAN: NO WAY HOME-Offical Trailer(HD)"
          channel="Sony Pictures Entertainment"
          views="77M views"
          timestamp="10 months ago"
          channelImage="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  )
}

export default RecommendedVideos
