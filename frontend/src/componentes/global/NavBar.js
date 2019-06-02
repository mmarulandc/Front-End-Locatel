import  React from 'react';

class NavBar extends React.Component {
    render(){
        return(
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">PLENIAL LOCATEL</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;