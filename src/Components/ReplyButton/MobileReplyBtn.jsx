import "./MobileReplyBtn.css";
import replyImg from "../../assets/icons/icon-reply.svg";
const MobileReplyBtn = () => {
  return (
    <div className="reply-btn-mobile">
      <img src={replyImg} alt="" className="reply" />
      Reply
    </div>
  );
};

export default MobileReplyBtn;
