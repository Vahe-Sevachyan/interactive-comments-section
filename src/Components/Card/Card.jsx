import CardHeader from "../CardHeader/CardHeader";
import amyrobson from "../../assets/avatars/amyrobson.png";
const Card = () => {
  return (
    <div>
      <CardHeader name="amyrobson" img={amyrobson} commentDate="1 month ago" />
      <p>
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You nailed the design and the
        responsiveness at various breakpoints works really well.
      </p>
    </div>
  );
};

export default Card;
