import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';
import { useEffect, useState } from "react";
import { API_KEY } from "./api.js";

function RecommendedVideos() {

  const [list, setList] = useState([]);

  const url = 'https://youtube-v3-alternative.p.rapidapi.com/trending';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  const getData = () => {
    fetch(url, options)
    .then(res => res.json())
    .then((json) => {
      setList(json.data);
    })
    .catch(err => console.error('error:' + err));
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>

      {list &&
        (list.length === 0
          ? <p>Loading... Please Wait!!</p>
          : (
            <div className="recommendedVideos__videos">

              {list.map(item => (
                <VideoCard
                  image={item.thumbnail[item.thumbnail.length - 1].url}
                  title={item.title}
                  channel={item.channelTitle}
                  views={item.viewCount}
                  timestamp={item.publishedText}
                  channelImage={item.channelThumbnail[0].url}
                  key={item.videoId + item.channelId}
                />
              ))}

            </div>
          )
        )
      }

    </div>
  )
}

export default RecommendedVideos
