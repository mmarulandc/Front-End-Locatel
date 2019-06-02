import React from 'react';
import ReactDOM from 'react-dom';
//import App from './componentes/App';
import {BrowserRouter as Router} from 'react-router-dom';
//routes
import AppRoutes from './routes'
import * as serviceWorker from './componentes/serviceWorker';

ReactDOM.render(<Router> 
    <AppRoutes/>
</Router>, document.getElementById('root'));
// ReactDOM.render(<Foot />, document.getElementById('footer'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Lekarn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
