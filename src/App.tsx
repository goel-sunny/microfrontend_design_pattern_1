import logo from "./logo.svg";
import "./App.css";
import { Header } from "./component/header/header";
import React from "react";
import { SideNav } from "./container/sidenav/sidenav";
import config from './assets/config/config.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux'; 
import {reducer} from './store/reducers/root.reducer';
import { composeWithDevTools } from "redux-devtools-extension";

// redux dev tools 
const composedEnhancer = composeWithDevTools();
const store = createStore(reducer , composedEnhancer);



function App() {
  console.log('Window.url   ',  config.apiURL);

  return (
      <Provider store={store}>
      <header className="app__header">
        <Header title="MicroFrontend" subTitle="Design Pattern 1" ></Header>
      </header>
      <main>
        <SideNav></SideNav>
      </main>
      </Provider> 
      );
}


// token d03ceb9f-9336-4bf3-b457-c3313f1645d4

export default App;
