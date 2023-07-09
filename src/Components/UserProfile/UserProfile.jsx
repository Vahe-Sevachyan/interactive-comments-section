import amyrobson from "../../assets/avatars/amyrobson.png";
import maxblagun from "../../assets/avatars/maxblagun.png";

const UserProfile = () => {
  const person = {
    userName: "amyrobson",
    date: "1 month ago",
  };
  return (
    <div>
      <img src={amyrobson} alt="" />
      {person.userName}
    </div>
  );
};

export default UserProfile;
