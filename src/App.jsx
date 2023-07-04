import "./App.css";
import ButtonContainer from "./Components/ButtonContainer/ButtonContainer";
import Card from "./Components/Card/Card";
import CardHeader from "./Components/CardHeader/CardHeader";
import amyrobson from "./assets/avatars/amyrobson.png";
function App() {
  return (
    <div className="container">
      <div className="card-btn-wrapper">
        <ButtonContainer />
        <Card>
          <CardHeader
            userName="amyrobson"
            userImg={amyrobson}
            commentDate="1 month ago"
          />
        </Card>
      </div>
      {/* <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

export default App;
