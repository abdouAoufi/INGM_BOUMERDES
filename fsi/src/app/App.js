
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from "../containers/Welcome/Welcome";
import Auth from "../containers/Auth/Auth"

function App() {
  return (
    <Router>
      <div className="App">
         {/* <Welcome /> */}
         <Auth />
      </div>
    </Router>
  );
}

export default App;
