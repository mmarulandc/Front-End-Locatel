import  React from 'react';
import {Link} from 'react-router-dom'

class NavBarLearning extends React.Component {
    render(){
        return(
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">PLENIAL LOCATEL</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/login/learning/audits">Auditorias</Link></li>
                                <li><Link to="/login/learning">Learning</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBarLearning;