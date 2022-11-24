import video from "../data/video.js";
import React, { useState } from "react";
import Video from "./Video.js";
import CommentList from "./CommentList.js";
import CommentsFilter from "./CommentsFilter.js";

function App() {
  console.log("Here's your data:", video);

  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  const [hideComments, setHideComments] = useState(false);

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
      return true;
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
        setHideComments={setHideComments}
        onHideComment={onHideComment}
      />
      <CommentList 
        comments={filteredComments}
      /> 
    </div>
  );
}

export default App;
