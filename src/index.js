import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { configStore } from './store/store';
import {BrowserRouter as Router, } from 'react-router-dom'
import {persistStore} from  'redux-persist';
import {persistGate} from 'redux-persist/lib/integration/react';
const store= configStore()
const persistor = persistStore(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <persistGate 
      loading={<div>loading.....</div>}
      persistor={persistor}>
   <Router>
     <App />
     </Router>
     </persistGate>
     </Provider>
     </React.StrictMode>,
    document.getElementById('root')
);


