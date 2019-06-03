import React, { Component } from 'react';
import NavBarFranq from './NavBarFranq';


class Franquiciado extends Component {
    render() {
        return(
            <div>
                <NavBarFranq/>
                
                <div className="container">
                    <div className="row">
                        <div className="col s8"> 
                        <h3>Información de franquicia</h3>
                            <div className="card">
                                <div className="card-content">
                                    <div className="row">
                                        <div className="col s4">
                                            <p>Nombre de la franquicia:</p>
                                            <p>País:</p>
                                            <p>Ciudad:</p>
                                            <p>Código postal:</p>
                                            <p>Dirección:</p>
                                            <p>ID de franquicia:</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col offset-s7">
                                        <button className="btn light-blue darken-4">Obtener feedback auditoria</button>
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

export default Franquiciado;