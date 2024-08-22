import "./components/Navbar";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import CardParent from "./components/CardParent";

function App() {
  return (
    <>
      <Navbar />
      {/* <Card /> */}
      <CardParent />
    </>
  );
}

export default App;
