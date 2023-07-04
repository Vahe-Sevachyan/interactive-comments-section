import "./CardHeader.css";
import DesktopReplyBtn from "../ReplyButton/DesktopReplyBtn";
const CardHeader = (props) => {
  return (
    <div className="card-header-wrapper">
      <div className="card-header">
        <img src={props.userImg} alt={props.imgAlt} className="avatar-img" />
        <span className="avatar-name"> {props.userName}</span>
        <span>{props.commentDate}</span>
      </div>
      <DesktopReplyBtn />
    </div>
  );
};

export default CardHeader;
