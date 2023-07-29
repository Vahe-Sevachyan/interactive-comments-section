import { useState } from "react";

const CommentBox = () => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReplyClick = () => {
    setShowReplyBox(true);
  };

  const handleCancelReply = () => {
    setShowReplyBox(false);
    setReplyText("");
  };

  const handleReplyTextChange = (e) => {
    setReplyText(e.target.value);
  };

  const handlePostReply = () => {
    // Here, you can handle posting the reply to a backend or any other actions you want to take.
    // For this example, we'll just log the reply text to the console.
    console.log("Reply posted:", replyText);
    // Clear the reply text and hide the reply box
    handleCancelReply();
  };

  return (
    <div>
      <button onClick={handleReplyClick}>Reply</button>
      {showReplyBox && (
        <div>
          <textarea
            rows={4}
            cols={40}
            value={replyText}
            onChange={handleReplyTextChange}
            placeholder="Write your reply here..."
          />
          <button onClick={handlePostReply}>Post Reply</button>
          <button onClick={handleCancelReply}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CommentBox;
