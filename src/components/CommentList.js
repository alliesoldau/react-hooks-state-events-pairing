import React, { useState } from 'react';
import Comment from './Comment'

function CommentList({ comments }) {
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0)

    // TO DO: Get upvotes / downvotes to just update per their comment
    function handleUpvotesClick() {
        setUpvotes(upvotes + 1);
    }

    function handleDownvotesClick() {
        setDownvotes(downvotes + 1);
    }

    const commentsList = comments.map((comment) => {
        return (
            <Comment 
                key={comment.id}
                user={comment.user}
                comment={comment.comment}
                upvotes={upvotes}
                downvotes={downvotes}
                handleUpvotesClick={handleUpvotesClick}
                handleDownvotesClick={handleDownvotesClick}
            />
        )
    })

    return (
    <div>
        <h4>{comments.length} Comments</h4>
        <div className="commentsList">
            {commentsList}
        </div>
        </div>
    )
}

export default CommentList;