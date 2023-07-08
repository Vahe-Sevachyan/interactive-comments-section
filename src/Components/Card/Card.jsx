import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      {props.children}
      <div className="content-wrapper"></div>
    </div>
  );
};

export default Card;
