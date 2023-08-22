import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/home';

function Routes() {
  const pages = [
    { path: '/', component: Home },
  ];

  return (
    <BrowserRouter>
      <Switch>
        {pages.map((page, index) => (
          <Route key={index} path={page.path} exact component={page.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
