import React from "react";

const Comment = ({ data }) => {
  return (
    <div className="single-comment">
      <img
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        height={"46px"}
      />
      <div className="comment-content">
        <p id="comment-user">{data.name}</p>
        <p id="comment-text">{data.comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  if (comments.replies.length) {
    return (
      <>
        <Comment data={comments} />
        <div
          style={{
            marginLeft: "25px",
            borderLeft: "2px solid black",
            backgroundColor: "rgb(194,193,193)",
          }}
        >
          {comments.replies.map((reply) => (
            <CommentsList comments={reply} />
          ))}
        </div>
      </>
    );
  } else {
    return <Comment data={comments} />;
  }
};

export default CommentsList;
