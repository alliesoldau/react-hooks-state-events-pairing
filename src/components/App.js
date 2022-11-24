import video from "../data/video.js";
import React, { useState } from "react";
import Video from "./Video.js";
import CommentList from "./CommentList.js";
import CommentsFilter from "./CommentsFilter.js";
import SearchComments from "./SearchComments.js";

function App() {
  console.log("Here's your data:", video);

  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  const [hideComments, setHideComments] = useState(true);
  const [text, setText] = useState("");


  function handleUpvotesClick() {
    setUpvotes(upvotes + 1);
  }

  function handleDownvotesClick() {
    setDownvotes(downvotes + 1);
  }

  function onHideComment() {
    setHideComments(!hideComments)
  }

  const filteredComments = video.comments.filter((comment) => {
    if (hideComments === true) {
      if (comment.user.toLowerCase().includes(text.toLowerCase())) {
          return true;
      }
    } else {
      return false;
    }
  })

  return (
    <div className="App">
      <Video 
        video={video}
        upvotes={upvotes}
        downvotes={downvotes}
        handleUpvotesClick={handleUpvotesClick}
        handleDownvotesClick={handleDownvotesClick}
      />
      <br></br> 
      <CommentsFilter
        hideComments={hideComments}
        onHideComment={onHideComment}
      />
      <br></br> 
      <SearchComments
        text={text}
        setText={setText}
      />
      <CommentList 
        comments={filteredComments}
      /> 
    </div>
  );
}

export default App;
