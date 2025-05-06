
import React, { useEffect, useState } from "react";
import "./YoutubeVideos.css";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw"; // Apple’s official YouTube channel
const MAX_RESULTS = 8;

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);
  const [sortOrder, setSortOrder] = useState("recent");

  const fetchVideos = async () => {
    try {
      const order = sortOrder === "popular" ? "viewCount" : "date";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=${order}&maxResults=${MAX_RESULTS}`
      );
      const data = await response.json();
      console.log(data);
      setVideos(data.items);
    } catch (err) {
      console.error("Error fetching YouTube videos:", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [sortOrder]);

  return (
    <div className="youtube-container">
      <h2>Latest from Apple</h2>
      <div className="video-filter">
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="recent">Most Recent</option>
          <option value="popular">Most Watched</option>
        </select>
      </div>
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




//We're importing React and useEffect & useState hooks.

// useEffect is used to perform side effects like fetching data.

// useState is used to store and update the state of the component.

// We're also importing the CSS file for styling.
// Define API Key and Channel Information:
// API_KEY: This is a secret key that allows us to access the YouTube API. It's stored in an environment variable (VITE_YOUTUBE_API_KEY), which is a good practice for keeping sensitive data secure.

// CHANNEL_ID: This is the YouTube channel ID for Apple's official channel. The channel ID is used to identify which channel's videos to fetch.

// MAX_RESULTS: This defines how many videos we want to fetch. In this case, we're fetching the latest 8 videos.
// Set up component state:
// videos: This state will store the list of YouTube videos fetched from the API.

// sortOrder: This state will store the user's selected sorting option (either "recent" or "popular").
// useEffect runs the fetch function when the component mounts and whenever the sortOrder changes.

// Determine the sort order:

// If sortOrder is "popular", we use "viewCount" to sort by most viewed videos.

// If sortOrder is "recent", we use "date" to get the most recent videos.

// Fetch the data:

// We're sending a request to the YouTube API to get videos from the specified channel. The request includes:

// key: the API key for authentication.

// channelId: the ID of Apple's YouTube channel.

// part: specifies which parts of the video to include (in this case, we need snippet and id).

// order: the sorting order (either by view count or date).

// maxResults: the number of results to return (in this case, 8).

// Handle the response:

// The data is fetched and converted into JSON. The fetched data is logged to the console for debugging.

// The setVideos function updates the videos state with the fetched video items.

// 5. Render the component:

// Render the title: A heading "Latest from Apple" is displayed at the top.

// Create a sort filter:

// A dropdown allows the user to select between "Most Recent" or "Most Watched" videos.

// When the selection changes, the sortOrder state is updated, triggering the useEffect to re-fetch the videos in the new order.

// Display the videos:

// The videos state holds the list of videos fetched from the API. We loop through each video using .map().

// For each video:

// A link (<a>) is created to the video on YouTube.

// The video thumbnail image is displayed.

// The video title, a truncated description, and the published date are shown.

// Key prop: Each video item is assigned a unique key using video.id.videoId to help React efficiently update the list of videos.

// 6. Video Card Styling:
// The individual video cards (images, titles, descriptions, etc.) are styled using classes such as youtube-video, youtube-grid, etc. You can define custom styles for these classes in the CSS file (YoutubeVideos.css).

// Summary of Flow:
// Initial State: When the component loads, it has no videos (videos = []).

// Fetch Data: The useEffect runs and fetches videos from the YouTube API based on the current sortOrder (either by view count or by date).

// Update State: Once the data is fetched, the videos state is updated with the fetched video information.

// Render: The component renders the video information, and when the user selects a new sorting option, it triggers another API call to get sorted videos.