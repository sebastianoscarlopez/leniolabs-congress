import React from 'react';
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import StoreApp from './core/store';
//import i18nInit from './core/i18n';

import MembersContainer from './components/Members';
import DetailsContainer from './components/Details/';

import Header from './components/Header/';
import Footer from './components/Footer/';

import './App.scss';

function App() {
//  i18nInit();
  return (
    <Provider store={StoreApp()}>
      <Header />
      <HashRouter basename='/'>
        <Switch>
          <Route exact path="/" component={MembersContainer} />
          <Route path="/details/:idMember">
            <DetailsContainer />
          </Route>
        </Switch>
      </HashRouter>
      <Footer />
    </Provider>
  );
}

export default App;
