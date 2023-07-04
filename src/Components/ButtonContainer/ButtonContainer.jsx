import "./ButtonContainer.css";
import VoteButton from "../VoteButton/VoteButton";
import MobileReplyBtn from "../ReplyButton/MobileReplyBtn";
const ButtonContainer = () => {
  return (
    <div>
      <VoteButton />
      <MobileReplyBtn />
    </div>
  );
};

export default ButtonContainer;
