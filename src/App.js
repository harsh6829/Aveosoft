import React from "react";
import Homecomp from "./HomeScreen/HomePage";
import DetailsScreen from "./DetailsScreen/DetailsScreen";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Route path="/home">
        <Homecomp />
      </Route>
      <Route
        path="/Details/:id"
        render={(props) => <DetailsScreen {...props} />}
      />
    </Switch>
  );
}

export default App;
