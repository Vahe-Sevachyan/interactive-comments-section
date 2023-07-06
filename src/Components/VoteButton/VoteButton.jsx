import { useState } from "react";
import "./VoteButton.css";
const VoteButton = ({ initialValue }) => {
  let [count, setCount] = useState(initialValue);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="btnContainer">
      <button onClick={plus}>+</button>
      <span>{count}</span>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default VoteButton;
