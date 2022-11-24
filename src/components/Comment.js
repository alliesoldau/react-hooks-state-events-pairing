import React from 'react';

function Comment({ user, comment, upvotes, downvotes, handleUpvotesClick, handleDownvotesClick }) {

    return(
        <div className="comment">
            <div className="user">{user}</div>
            <div className="text">{comment}</div>
            <button className="upvotes" onClick={handleUpvotesClick}>{upvotes} 👍</button>
            <button className="downvotes" onClick={handleDownvotesClick}>{downvotes} 👎</button>
        </div>
    )
}

export default Comment;