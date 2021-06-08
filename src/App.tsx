import "./App.css";
import React from "react";
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
      </header>
      <main>
      </main>
      </Provider> 
      );
}

export default App;
