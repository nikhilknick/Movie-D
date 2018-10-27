import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "../elements/NotFound/NotFound";
import Movie from "../Movie/Movie";
import Header from "../elements/Header/Header";
import Home from "../Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route componenet={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
