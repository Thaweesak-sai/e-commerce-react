import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";

const Router: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
