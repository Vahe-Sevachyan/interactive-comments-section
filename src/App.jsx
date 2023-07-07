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

  const handleReplyClick = () => {
    setShowReplySection(!showReplySection);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const headerContent = (
    <div className="card-header">
      <img src="userImg" alt="imgAlt" className="avatar-img" />
      <span className="avatar-name">userName</span>
      <span>commentDate</span>
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
            comment={comment}
          />

          <CommentComponent comment=" Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You nailed the design and the responsiveness at various breakpoints works really well." />
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
          <CommentComponent comment=" Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You nailed the design and the responsiveness at various breakpoints works really well." />
        </Card>
        <ButtonContainer initialValue={5} />
      </div>
      <div className="card-btn-wrapper" id="mobile-layout">
        <Card>
          <CardHeader
            userName="amyrobson"
            userImg={amyrobson}
            commentDate="1 month ago"
          />
          <CommentComponent comment=" Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You nailed the design and the responsiveness at various breakpoints works really well." />
        </Card>
        <ButtonContainer initialValue={10} />
      </div>
    </div>
  );
}

export default App;
