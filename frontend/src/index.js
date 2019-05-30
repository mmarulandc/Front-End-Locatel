import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Foot />, document.getElementById('footer'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Lekarn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
