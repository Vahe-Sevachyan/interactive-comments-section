import "./MobileReplyBtn.css";
import replyImg from "../../assets/icons/icon-reply.svg";
const MobileReplyBtn = () => {
  return (
    <button className="reply-btn-mobile">
      <img src={replyImg} alt="" className="reply" />
      Reply
    </button>
  );
};

export default MobileReplyBtn;
