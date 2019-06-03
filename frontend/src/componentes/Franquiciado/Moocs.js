import React, { Component } from 'react';
import NavBarFranq from './NavBarFranq';

class Moocs extends Component {
    render(){
        return(
            <div>
                <NavBarFranq/>
                <div className="container">
                    <div className="row">
                        <div className="col s7">
                            <div className="card">
                                <div className="card-content">
                                    <div className="row">
                                        <div className="col s6">
                                            <p>Moocs disponibles</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <ul className="collection">
                                                <li className="collection-item">hola</li>
                                                <li className="collection-item">hola</li>
                                                <li className="collection-item">hola</li>
                                                <li className="collection-item">hola</li>
                                                <li className="collection-item">hola</li>
                                                <li className="collection-item">hola</li>
                                                <li className="collection-item">hola</li>
                                                <li className="collection-item">hola</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s4" >
                                            <button className="btn light-blue darken-4"> Obtener feedback mooc</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Moocs;