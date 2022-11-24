import React from 'react';

function Comment({ user, comment}) {
    return(
        <div className="comment">
            <div classname="user">{user}</div>
            <div className="text">{comment}</div>
        </div>
    )
}

export default Comment;