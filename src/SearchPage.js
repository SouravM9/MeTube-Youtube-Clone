import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import { useEffect, useState } from "react";
import VideoCard from './VideoCard';
import {API_KEY} from "./api.js";

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

async function getListYoutube(q) {
    const response = await fetch('https://youtube-v31.p.rapidapi.com/search?q=' + q + '&part=snippet%2Cid&regionCode=IN&maxResults=100&order=date',
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

function SearchPage() {

    let searchurl = window.location.href;
    var result = searchurl.split('/')
    let SearchTerm = result[result.length-1];

    const [query, setQuery] = React.useState(SearchTerm);
    const [list, setList] = React.useState(null);
    
    //console.log(query);
    const search = (e) => {
        searchYouTube(query).then(setList);  // Use this for best response
        // getListYoutube(query).then(setList);
    };

    useEffect(() => {
        search();
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

            <VideoRow
                image="https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg"
                title="SPIDER-MAN: NO WAY HOME-Offical Trailer(HD)"
                channel="Sony Pictures Entertainment"
                views="77M views"
                timestamp="10 months ago"
                channelImage="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj"
                description="We started getting visistors... from every universe. Watch the official trailer for #SpiderManNoWayHome"
            />  */}

            {list &&
                (list.length === 0
                    ? <p>No results</p>
                    : (
                        <div className="s">

                            {list.map(item => (

                                <VideoRow
                                    
                                    image={item.thumbnails[0].url}
                                    title={item.title}
                                    channel={item.author.name}
                                    views={item.views}
                                    timestamp={item.uploadedAt}
                                    channelImage={item.author.bestAvatar.url}
                                    description=""

                                    // key={item.id.videoId}
                                    // image={item.snippet.thumbnails.high.url}
                                    // title={item.snippet.title}
                                    // channel={item.snippet.channelTitle}
                                    // views=""
                                    // timestamp=""
                                    // channelImage=""
                                    // description=""

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
