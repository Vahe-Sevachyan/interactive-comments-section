import "./ButtonContainer.css";
import VoteButton from "../VoteButton/VoteButton";
import MobileReplyBtn from "../ReplyButton/MobileReplyBtn";
const ButtonContainer = ({ initialValue }) => {
  return (
    <div>
      <VoteButton initialValue={initialValue} />
      <MobileReplyBtn />
    </div>
  );
};

export default ButtonContainer;
