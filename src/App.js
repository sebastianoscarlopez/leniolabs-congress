import React from 'react';
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';

import StoreApp from './core/store';
//import i18nInit from './core/i18n';

import MembersContainer from './components/MembersContainer'

import logo from './assets/leniolabs-isologo.svg';
import './App.css';

function App() {
//  i18nInit();
  return (
    <Provider store={StoreApp()}>
      <MembersContainer />
    </Provider>
  );
}

export default App;
