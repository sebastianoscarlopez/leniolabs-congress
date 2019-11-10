import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import StoreApp from './core/store';
//import i18nInit from './core/i18n';

import MembersContainer from './components/MembersContainer';
import DetailContainer from './components/DetailContainer';

import './App.css';

function App() {
//  i18nInit();
  return (
    <Provider store={StoreApp()}>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={MembersContainer} />
        <Route path="/details/:idMember">
          <DetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
