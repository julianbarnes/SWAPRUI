import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Layout from './Layout';
import Assignment from './Pages/Assignment';
import MainPage from './Pages/MainPage.jsx';

ReactDOM.render(
  <div>
    <Layout />
    <BrowserRouter>
          <Switch>
              <Route exact path="/" component={ MainPage } />
              <Route path="/Assignment" component={ Assignment } />
          </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
