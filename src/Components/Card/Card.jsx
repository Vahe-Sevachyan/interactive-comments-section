import CardHeader from "../CardHeader/CardHeader";
import amyrobson from "../../assets/avatars/amyrobson.png";
import "./Card.css";
import VoteButton from "../VoteButton/VoteButton";
import ReplyButton from "../ReplyButton/ReplyButton";
const Card = () => {
  return (
    <div className="card">
      <div className="vote-btn-container">
        <VoteButton />
        <div className="reply-btn-mobile">
          <ReplyButton />
        </div>
      </div>

      <div className="content-wrapper">
        <div className="header-container">
          <CardHeader
            name="amyrobson"
            img={amyrobson}
            commentDate="1 month ago"
          />
          <div className="reply-btn-desktop">
            <ReplyButton />
          </div>
        </div>

        <p>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
      </div>
    </div>
  );
};

export default Card;
