import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Home from '../pages/home';
import ItemDetailPage from '../pages/ItemDetail';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/product/:itemID">
          <ItemDetailPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
