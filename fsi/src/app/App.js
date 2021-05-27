import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "../containers/Welcome/Welcome";
import Auth from "../containers/Auth/Auth";
import Test from "../containers/Test/Test";
 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
