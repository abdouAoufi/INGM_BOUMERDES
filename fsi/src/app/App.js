
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from "../containers/Welcome/Welcome"

function App() {
  return (
    <Router>
      <div className="App">
         <Welcome />
      </div>
    </Router>
  );
}

export default App;
