import React from 'react';
import Comment from './Comment'

function CommentList({ comments }) {

    const commentsList = comments.map((comment) => {
        return (
            <Comment 
                key={comment.id}
                user={comment.user}
                comment={comment.comment}
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