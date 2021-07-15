import * as AppStyle from "./App";
import React from "react";
import config from './assets/config/config.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux'; 
import {reducer} from './store/reducers/root.reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { Header } from './component/header/header';
import { Users } from "./container/users/users";
import {Redirect, Route , Switch} from 'react-router-dom';
import { CreateUser } from "./container/create-user/create-user";
// redux dev tools 
const composedEnhancer = composeWithDevTools();
const store = createStore(reducer , composedEnhancer);



function App() {
  console.log('Window.url   ',  config.apiURL);

  return (
      <Provider store={store}>
          <header className="app__header">
            <Header label={'Microfrontend App 1'}></Header>  
          </header>
            <main className="app_body">
              <Switch>
                  <Route path="/createUser"  component={CreateUser}/>
                  <Route path="/users"  component={Users}/>
                  <Route path="/" >
                    <Redirect to='users'/>
                  </Route>
              </Switch>
          </main>
      </Provider> 
    );
}

export default App;
