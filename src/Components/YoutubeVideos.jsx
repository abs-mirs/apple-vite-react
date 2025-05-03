
import React, { useEffect, useState } from "react";
import "./YoutubeVideos.css";


const API_KEY = "AIzaSyBoJQ_PXf_5SUo0VrusCmYQnuWhj_TWhIw"; 
const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw"; // Apple’s official YouTube channel
const MAX_RESULTS = 8;

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      })
      .catch((err) => console.error("Error fetching YouTube videos:", err));
  }, []);

  return (
    <div className="youtube-container">
      <h2>Latest from Apple</h2>
      <div className="youtube-grid">
        {videos.map((video) => (
          <div className="youtube-video" key={video.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
            </a>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description.slice(0, 100)}...</p>
            <small>{new Date(video.snippet.publishedAt).toDateString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YoutubeVideos;
