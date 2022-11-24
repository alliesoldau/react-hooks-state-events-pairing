import React from 'react';

function CommentsFilter({ onHideComment, hideComments }) {
    
    return(
        <div>
            <button onClick={() => onHideComment()}>{hideComments ? "Hide Comments" : "Show Comments"}</button>
        </div> 
    )
}

export default CommentsFilter;