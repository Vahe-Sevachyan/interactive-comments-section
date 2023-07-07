import "./DesktopReplyBtn.css";
import replyImg from "../../assets/icons/icon-reply.svg";
const DesktopReplyBtn = ({ handleReplyClick }) => {
  return (
    <button onClick={handleReplyClick}>
      <img src={replyImg} alt="" className="reply" />
      Reply
    </button>
  );
};

export default DesktopReplyBtn;
