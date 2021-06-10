import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import ListingPage from '../pages/listing';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/listing">
          <ListingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
