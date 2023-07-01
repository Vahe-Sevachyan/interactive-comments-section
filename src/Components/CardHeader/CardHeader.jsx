const CardHeader = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <span> {props.name}</span>
      <span>{props.commentDate}</span>
    </div>
  );
};

export default CardHeader;
