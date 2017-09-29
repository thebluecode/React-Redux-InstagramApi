import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from './components/App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
