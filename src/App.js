import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbardisney from "./components/Navbardisney";
import Homedisney from "./components/Homedisney";
import Footerdisney from "./components/Footerdisney";

function App() {
  return (
    <div>
      <Navbardisney />
      <Homedisney />
      <Footerdisney />
    </div>
  );
}

export default App;
