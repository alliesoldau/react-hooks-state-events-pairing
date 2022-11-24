import React from 'react';

function Video({ video, upvotes, downvotes, handleUpvotesClick, handleDownvotesClick }) {
    return (
    <div>
        <iframe
        width="919"
        height="525"
        // TO DO: Add in proper video url
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
        />
        <h3>{video.title}</h3>
        <p>
            <span>{video.views} Views | </span>
            <span>Uploaded {video.createdAt}</span>
        </p>
        <button onClick={handleUpvotesClick}>{upvotes} 👍</button>
        <button onClick={handleDownvotesClick}>{downvotes} 👎</button>
      </div>
    )
}

export default Video;