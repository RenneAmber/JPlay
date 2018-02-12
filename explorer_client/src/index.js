import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import './index.css';
import App from './App';
// import configureStore from './common'
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// const store = configureStore( window.REDUX_STATE);

ReactDOM.render(
    (
        <BrowserRouter>
            <Route path="/" component ={App}/>
        </BrowserRouter>
    ),
    document.getElementById('root')
);
registerServiceWorker();
