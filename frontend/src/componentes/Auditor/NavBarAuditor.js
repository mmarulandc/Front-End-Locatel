import  React from 'react';
import {Link} from 'react-router-dom'

class NavBarAuditor extends React.Component {
    render(){
        return(
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">PLENIAL LOCATEL</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><Link to="/">Gestionar Evaluaciones</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBarAuditor;