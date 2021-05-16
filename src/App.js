import "./App.css";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
