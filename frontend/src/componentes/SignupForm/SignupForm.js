import React, { Component } from 'react';
import NavBar from '../global/NavBar';

class SignupForm extends Component {
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
                                        <label for="first_name">Nombre del franquiciado</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" class="validate"></input>
                                        <label for="last_name">Apellidos</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input id="user" type="text" class="validate"></input>
                                        <label for="user">Nombre de usuario</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input  id="password" type="password" class="validate"></input>
                                        <label for="password">Contraseña</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input  id="re_password" type="password" class="validate"></input>
                                        <label for="re_password">Confirmar Contraseña</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="phone" type="text" class="validate"></input>
                                        <label for="phone">Telefono de contacto</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="email" type="email" class="validate"></input>
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input  id="country" type="text" class="validate"></input>
                                        <label for="country">País de franquicia</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="city" type="text" class="validate"></input>
                                        <label for="city">Ciudad de franquicia</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input  id="address" type="text" class="validate"></input>
                                        <label for="address">Dirección de franquicia</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="postal_code" type="text" class="validate"></input>
                                        <label for="postal_code">Código postal</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="code" type="text" class="validate"></input>
                                        <label for="code">Código de registro</label>
                                        <span class="helper-text" data-error="wrong" data-success="right">Código dado al registrar una franquicia ante la casa matriz</span>
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

export default SignupForm;