import React, { Component } from 'react';
import NavBar from '../global/NavBar';

class InterestForm extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <div className="container">
                    <div className="card">
                        <div class="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input  id="first_name" type="text" class="validate"></input>
                                        <label for="first_name">Nombre </label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" class="validate"></input>
                                        <label for="last_name">Apellidos</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input id="email" type="email" class="validate"></input>
                                        <label for="email">Email</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input  id="country" type="text" class="validate"></input>
                                        <label for="phone">Telefono de contacto</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input  id="country" type="text" class="validate"></input>
                                        <label for="country">País</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="city" type="text" class="validate"></input>
                                        <label for="city">Ciudad</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s1">
                                    <button type="submit" className="btn light-blue darken-4">
                                        Enviar 
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InterestForm;