import React, { Component } from 'react';
import NavBarLearning from './NavBarLearning';


class Learning extends Component {
    render(){
        return(
            <div>
                <NavBarLearning/>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-content">
                                    <form>
                                        <div className="row">
                                            <div className="input-field col s2">
                                                <input  id="id" type="text" class="validate"></input>
                                                <label for="id">ID de franquicia</label>
                                            </div>
                                            <div className="col s2">
                                                <button type="submit" className="btn light-blue darken-4"> Buscar Franquicia</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col s4">
                                            <div className="card">
                                                <div className="card-content">
                                                    <p>Lista de Moocs</p>
                                                    <ul className="collection">
                                                        <li className="collection-item"></li>
                                                        <li className="collection-item"></li>
                                                        <li className="collection-item"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s4">
                                            <div className="card">
                                                <div className="card-content">
                                                    <p>Moocs habilitados</p>
                                                    <ul className="collection">
                                                        <li className="collection-item"></li>
                                                        <li className="collection-item"></li>
                                                        <li className="collection-item"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s4">
                                            <button className="btn light-blue darken-4">Habilitar</button>
                                            <div className="col s7">
                                            <button className="btn light-blue darken-4">Obtener resultados</button>
                                            </div>
                                        </div>
                                        <div className="col s2">
                                            <button className="btn light-blue darken-4">Deshabilitar</button>
                                        </div>
                                        <div className="col s2">
                                            <button className="btn light-blue darken-4">Deshabilitar</button>
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

export default Learning;