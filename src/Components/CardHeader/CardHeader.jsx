import "./CardHeader.css";
import DesktopReplyBtn from "../ReplyButton/DesktopReplyBtn";
const CardHeader = ({
  showReplySection,
  handleReplyClick,
  handleCommentChange,
  comment,
  headerContent,
}) => {
  return (
    <div className="card-header-wrapper">
      {/* <div className="card-header">
        <img src={props.userImg} alt={props.imgAlt} className="avatar-img" />
        <span className="avatar-name"> {props.userName}</span>
        <span>{props.commentDate}</span>
      </div> */}
      {headerContent}
      <DesktopReplyBtn handleReplyClick={handleReplyClick} />
      {showReplySection && (
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your comment..."
        />
      )}
    </div>
  );
};

export default CardHeader;
