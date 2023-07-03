import "./CardHeader.css";
const CardHeader = (props) => {
  return (
    <div className="card-header">
      <img src={props.img} alt="" />
      <span> {props.name}</span>
      <span>{props.commentDate}</span>
    </div>
  );
};

export default CardHeader;
