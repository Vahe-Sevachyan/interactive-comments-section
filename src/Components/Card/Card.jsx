import "./Card.css";
import VoteButton from "../VoteButton/VoteButton";
import MobileReplyBtn from "../ReplyButton/MobileReplyBtn";

const Card = (props) => {
  return (
    <div className="card">
      {props.children}
      <div className="btn-container">
        <VoteButton />
        <MobileReplyBtn />
      </div>
      <div className="content-wrapper">
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
