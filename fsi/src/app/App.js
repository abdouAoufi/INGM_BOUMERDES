import { Route, Switch } from "react-router-dom";
import Welcome from "../containers/Welcome/Welcome";
import Auth from "../containers/Auth/Auth";
import Test from "../containers/Test/Test";
import Home from "../containers/Home/Home";
import AuthContext from "../context/authContext";
import Aux from "../hoc/Aux";
import { useState } from "react";

function App() {
  const [isAuth, setAuth] = useState(true);
  const authHandler = () => {
    setAuth(!isAuth);
  };
  return (
    <Aux>
      <AuthContext.Provider
        value={{ status: isAuth, changeStatue: authHandler }}
      >
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/welcome" component={Welcome} />
          <Route path="/" component={Home} />
        </Switch>
      </AuthContext.Provider>
    </Aux>
  );
}

export default App;
