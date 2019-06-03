import React from 'react';
import {Route, Switch} from 'react-router-dom'

//componentes
import App from './componentes/App';
import LoginForm from './componentes/LoginForm/LoginForm';
import SignUpForm from './componentes/SignupForm/SignupForm';
import InterestForm from './componentes/InterestForm/InterestForm';
import Auditor from './componentes/Auditor/Auditor';
import Marketing from './componentes/Marketing/Marketing';
import Franquiciado from './componentes/Franquiciado/Franquiciado';
import Moocs from './componentes/Franquiciado/Moocs';
import Learning from './componentes/Learning/Learning';
import Auditorias from './componentes/Learning/Auditorias';
// import page404 from './componentes/Page404'

const AppRoutes = () => 
        <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route exact path="/signup" component={SignUpForm}/>
            <Route exact path="/interest" component={InterestForm}/>
            <Route exact path="/login/auditor" component={Auditor} />
            <Route exact path="/login/marketing" component={Marketing}/>
            <Route exact path="/login/franchisee" component={Franquiciado}/>
            <Route exact path="/login/franchisee/moocs" component={Moocs}/>
            <Route exact path="/login/learning" component={Learning}/>
            <Route exact path="/login/learning/audits" component={Auditorias}/> {/*este reutiliza el componente de marketing*/ }
            
            {/*<Route component={page404}/> */}
        </Switch>
    ;

export default AppRoutes;