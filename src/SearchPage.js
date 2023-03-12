import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import VideoRow from './VideoRow';
import { useEffect, useState } from "react";
import { API_KEY } from "./api.js";


const url = 'https://youtube-v3-alternative.p.rapidapi.com/search?query=';

function SearchPage() {

    let searchurl = window.location.href;
    var result = searchurl.split('/')
    let SearchTerm = result[result.length - 1];

    const [query, setQuery] = useState(SearchTerm);
    const [list, setList] = useState(null);

    const search = () => {

        setQuery(encodeURIComponent(query));

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        };

        fetch(url + query, options)
            .then(res => res.json())
            .then(json => {
                setList(json.data)
            })
            .catch(err => console.error('error:' + err));

    }

    useEffect(() => {
        search();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            {/* <ChannelRow
                image="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj"
                Channel="Sony Pictures Entertainment"
                verified
                subs="6.45M"
                noOfVideos={4406}
                description="Welcome to the official channel for Sony Pictures Entertainment."
            />
            <hr />
            */}

            {list &&
                (list.length === 0
                    ? <p>No results</p>
                    : (
                        <div className="s">

                            {list.map(item => (

                                <VideoRow
                                    image={item.thumbnail[item.thumbnail.length - 1].url}
                                    title={item.title}
                                    channel={item.channelTitle}
                                    views={item.viewCount}
                                    timestamp={item.publishedText ? item.publishedText : ""}
                                    channelImage={item.channelThumbnail ? item.channelThumbnail[0].url : ""}
                                    description={item.description}
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

export default SearchPage
