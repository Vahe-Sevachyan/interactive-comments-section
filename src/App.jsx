import "./App.css";
import ButtonContainer from "./Components/ButtonContainer/ButtonContainer";
import Card from "./Components/Card/Card";
import CardHeader from "./Components/CardHeader/CardHeader";
import Comment from "./Components/Comment/Comment";
import amyrobson from "./assets/avatars/amyrobson.png";
import maxblagun from "./assets/avatars/maxblagun.png";
import CommentBox from "./Components/CommentBox/CommentBox";
function App() {
  return (
    <div className="container">
      <div className="card-btn-wrapper " id="mobile-layout">
        <Card>
          <CardHeader
            userName="amyrobson"
            userImg={amyrobson}
            commentDate="3 weeks ago"
          />
          <Comment userPost=" Impressive! Though it seems the drag & drop feature could be improved. But overall it looks incredible." />
          <CommentBox />
        </Card>

        <ButtonContainer initialValue={0} />
      </div>
      <div className="card-btn-wrapper" id="mobile-layout">
        <Card>
          <CardHeader
            userName="maxblagun"
            userImg={maxblagun}
            commentDate="2 month ago"
          />
          <Comment userPost=" Impressive! Though it seems the drag feature could be improved. But overall it looks incredible." />
          <CommentBox />
        </Card>
        <ButtonContainer initialValue={5} />
      </div>
    </div>
  );
}

export default App;
