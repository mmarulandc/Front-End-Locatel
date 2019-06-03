import React, { Component } from 'react';
import NavBar from '../global/NavBar';


class Marketing extends Component {
    render() {
        return(
            <div>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <div className="col s8">
                            <div className="card">
                                <div className="card-content">
                                    <form>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input  id="id_fran" name="username"  type="text" autoFocus/>
                                                <label for="id_fran">ID de franquicia</label>
                                            </div>
                                            <div className="col s6">
                                                <button type="submit" className="btn light-blue darken-4">Buscar franquicia</button>
                                            </div>
                                            
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col s12">
                                            <ul className="collection">
                                                <li className="collection-item">ejemplo</li>
                                                <li className="collection-item">ejemplo2</li>
                                                <li className="collection-item">ejemplo3</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s5">
                                            <button type="submit" className="btn light-blue darken-4">Obtener resultados de auditoria</button>
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

export default Marketing;