import React, {Component} from 'react';
class LoginForm extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s5 offset-s3" >
                        <div className="card">
                            <div className="card-content">
                                <form onSubmit={this.addTask}>
                                    <div className="row">
                                    <div className="input-field col s12">
                                        <input  id="username" name="username"  type="text" autoFocus/>
                                        <label for="username">Nombre de Usuario</label>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="input-field col s12">
                                        <input id="password" type="password" class="validate"></input>
                                        <label for="password">Password</label>
                                    </div>
                                    </div>

                                    <button type="submit" className="btn light-blue darken-4">
                                    Login 
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;