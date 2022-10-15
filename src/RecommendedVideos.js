import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';
import { useEffect, useState } from "react";
import { API_KEY } from "./api.js";

// Previous
let fetchUrl = "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=";
let videoHostUrl = "youtube-search-results.p.rapidapi.com";

// Use this for best response
async function searchYouTube(q) {
  q = encodeURIComponent(q);
  const response = await fetch(fetchUrl + q, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": videoHostUrl,
      "x-rapidapi-key": API_KEY
    }
  });
  const body = await response.json();
  console.log(body);
  return body.items
    .filter(item => item.type === 'video');
}

async function getListYoutube() {
  const response = await fetch('https://youtube-v31.p.rapidapi.com/search?q=movie&part=snippet%2Cid&regionCode=IN&maxResults=100&order=date',
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": 'youtube-v31.p.rapidapi.com',
        "x-rapidapi-key": API_KEY
      }
    });
  const body = await response.json();
  console.log(body);
  return body.items;
}

function RecommendedVideos() {

  const [query, setQuery] = React.useState('Gaming');
  const [list, setList] = React.useState(null);

  const search = (e) => {
    searchYouTube(query).then(setList);  // Use this for best response
    // getListYoutube().then(setList);
  };

  useEffect(() => {
    search();
  }, [])

  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      {/* <div className='recommendedVideos__videos'> */}
      {/*         
        <VideoCard image="https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg"
          title="SPIDER-MAN: NO WAY HOME-Offical Trailer(HD)"
          channel="Sony Pictures Entertainment"
          views="77M views"
          timestamp="10 months ago"
          channelImage="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj"
        />
        */}

      {list &&
        (list.length === 0
          ? <p>No results</p>
          : (
            <div className="recommendedVideos__videos">             

              {list.map(item => (
                <VideoCard

                  image={item.thumbnails[0].url}
                  title={item.title}
                  channel={item.author.name}
                  views={item.views}
                  timestamp={item.uploadedAt}
                  channelImage={item.author.bestAvatar.url}
                  key={item.id + item.title}
                  
                  // key={item.id.videoId}
                  // image={item.snippet.thumbnails.high.url}
                  // title={item.snippet.title}
                  // channel={item.snippet.channelTitle}
                  // views=""
                  // timestamp=""
                  // channelImage=""
                />
              ))}

            </div>
          )
        )
      }

    </div>
    // </div>
  )
}

export default RecommendedVideos
