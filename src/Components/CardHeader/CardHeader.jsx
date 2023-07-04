import "./CardHeader.css";
const CardHeader = (props) => {
  return (
    <div className="card-header">
      <img src={props.img} alt="picture of amy robson" className="avatar-img" />
      <span className="avatar-name"> {props.name}</span>
      <span>{props.commentDate}</span>
    </div>
  );
};

export default CardHeader;
