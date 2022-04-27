import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from "./redux/store";
import { Provider } from "react-redux";
//store.subscribe(()=>{console.log(store.getState)});
ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

