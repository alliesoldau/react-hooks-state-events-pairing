import React from 'react';

function CommentsFilter({ onHideComment }) {
    
    return(
        <div>
            <button onClick={() => onHideComment()}>Hide Comments</button>
        </div> 
    )
}

export default CommentsFilter;