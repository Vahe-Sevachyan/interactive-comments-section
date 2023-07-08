import "./CardHeader.css";
import DesktopReplyBtn from "../ReplyButton/DesktopReplyBtn";
const CardHeader = ({ handleReplyClick, headerContent }) => {
  return (
    <div className="card-header-wrapper">
      {headerContent}
      <DesktopReplyBtn handleReplyClick={handleReplyClick} />
    </div>
  );
};

export default CardHeader;
