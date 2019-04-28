import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';
import * as serviceWorker from './serviceWorker';

mixpanel.init("ed07f795b919d64363a94e79090a54d2");

ReactDOM.render(
    <MixpanelProvider mixpanel={mixpanel}>
        <App/>
    </MixpanelProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
