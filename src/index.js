import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './header';
import About from './about';
import Portfolio from './portfolio';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);

module.hot.accept();
