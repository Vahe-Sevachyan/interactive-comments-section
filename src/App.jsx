import "./App.css";
import ButtonContainer from "./Components/ButtonContainer/ButtonContainer";
import Card from "./Components/Card/Card";
import CardHeader from "./Components/CardHeader/CardHeader";
import CommentComponent from "./Components/CommentComponent/CommentComponent";
import amyrobson from "./assets/avatars/amyrobson.png";
import { useState } from "react";

function App() {
  const [showReplySection, setShowReplySection] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleReplyClick = () => {
    setShowReplySection(!showReplySection);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (comment.trim() !== "") {
      const newComment = {
        id: Date.now(),
        content: comment,
      };

      setComments((prevComments) => [...prevComments, newComment]);
      setComment("");
    }
  };
  const renderComments = () => {
    return comments.map((comment) => (
      <div key={comment.id} className="comment">
        {comment.content}
      </div>
    ));
  };
  const headerContent = (
    <div className="card-header">
      <img src={amyrobson} alt="imgAlt" className="avatar-img" />
      <span className="avatar-name">amyrobson</span>
      <span> april 1 2023</span>
    </div>
  );
  return (
    <div className="container">
      <div className="card-btn-wrapper " id="mobile-layout">
        <Card>
          <CardHeader
            headerContent={headerContent}
            showReplySection={showReplySection}
            handleReplyClick={handleReplyClick}
            handleCommentChange={handleCommentChange}
            handleCommentSubmit={handleCommentSubmit}
            comment={comment}
          />
          <CommentComponent userPost=" Impressive! Though it seems the drag & drop feature could be improved. But overall it looks incredible." />
          {showReplySection && (
            <form onSubmit={handleCommentSubmit}>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Write your comment..."
              />
              <button type="submit">Post Comment</button>
            </form>
          )}
          {renderComments()}
        </Card>
        <ButtonContainer initialValue={0} />
      </div>
      <div className="card-btn-wrapper" id="mobile-layout">
        <Card>
          <CardHeader
            userName="amyrobson"
            userImg={amyrobson}
            commentDate="1 month ago"
          />
          <CommentComponent userPost=" Impressive! Though it seems the drag feature could be improved. But overall it looks incredible." />
        </Card>
        <ButtonContainer initialValue={5} />
      </div>
      {/* <div className="card-btn-wrapper" id="mobile-layout">
        <Card>
          <CardHeader
            userName="amyrobson"
            userImg={amyrobson}
            commentDate="1 month ago"
          />
          <CommentComponent userPost=" Impressive! Though it seems the drag feature could be improved. But overall it looks incredible." />
        </Card>
        <ButtonContainer initialValue={10} />
      </div> */}
    </div>
  );
}

export default App;
