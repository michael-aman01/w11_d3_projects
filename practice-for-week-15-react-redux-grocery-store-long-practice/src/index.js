import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import {populateProduce} from './store/produce'
import {addToCart} from './store/cart'

window.populateProduce = populateProduce
window.addToCart = addToCart

export const Store = configureStore()


function Root() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  );
}

window.store = Store;

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);