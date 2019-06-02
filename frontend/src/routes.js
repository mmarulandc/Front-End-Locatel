import React from 'react';
import {Route, Switch} from 'react-router-dom'

//componentes
import App from './componentes/App';
import LoginForm from './componentes/LoginForm/LoginForm';
import SignUpForm from './componentes/SignupForm/SignupForm';
import InterestForm from './componentes/InterestForm/InterestForm';
// import page404 from './componentes/Page404'

const AppRoutes = () => 
        <Switch>
            <Route  exact path="/" component={LoginForm}/>
            <Route exact path="/signup" component={SignUpForm}/>
            <Route path="/interest" component={InterestForm}/>
            {/*<Route component={page404}/> */}
        </Switch>
    ;

export default AppRoutes;