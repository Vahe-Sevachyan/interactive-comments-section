import "./DesktopReplyBtn.css";
import replyImg from "../../assets/icons/icon-reply.svg";
const DesktopReplyBtn = () => {
  return (
    <div className="">
      <img src={replyImg} alt="" className="reply" />
      Reply
    </div>
  );
};

export default DesktopReplyBtn;
