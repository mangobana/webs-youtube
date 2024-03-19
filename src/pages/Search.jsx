import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchId}`)
            .then((data) => setVideos(data.items))
    }, [searchId]);

    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id='searchPage'>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
            </section>
        </Main>
    )
}

const fetchVideos = (query, pageToken = '') => {
    fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
    .then((data) => {
        setNextPageToken(data.nextPageToken);
        setVideos((prevVideos) => [...prevVideos, ...data.items]);
        setLoading(false);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); 
    });
};

export default Search