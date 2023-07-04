import "./App.css";
import Card from "./Components/Card/Card";
import CardHeader from "./Components/CardHeader/CardHeader";
import amyrobson from "./assets/avatars/amyrobson.png";
function App() {
  return (
    <div className="container">
      <Card>
        <CardHeader
          userName="amyrobson"
          userImg={amyrobson}
          commentDate="1 month ago"
        />
      </Card>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
