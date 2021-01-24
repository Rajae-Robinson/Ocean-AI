import React, { Component } from 'react';
import { Link } from "react-router-dom";
import auth from '../../auth';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginEmail: '',
            loginPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({loginEmail: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({loginPassword: event.target.value})
    }
    
    onSubmitLogin = () => {
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: this.state.loginEmail,
                password: this.state.loginPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                auth.login(() => {
                    this.props.history.push(`user/${user.id}`)
                })
            }
        })
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
            style={{'backgroundColor': 'rgb(35, 38, 139)'}}>
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0 near-white">Login</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy near-white f6" htmlFor="email-address">Email</label>
                            <input
                            className="pa2 input-reset ba bg-white w-100"
                            type="email"
                            name="email-address"
                            id="email-address"
                            required
                            onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 near-white" htmlFor="password">Password</label>
                            <input
                            className="b pa2 input-reset ba bg-white w-100"
                            type="password"
                            name="password"
                            id="password"
                            required
                            onChange={this.onPasswordChange}
                            />
                        </div>
                        </fieldset>
                        <div className="flex justify-center">
                        <input
                            onClick={this.onSubmitLogin}
                            className="b ph3 pv2 input-reset ba br2 b--green bg-green grow pointer f6 dib near-white"
                            type="submit"
                            value="Login"
                        />
                        </div>
                        <div className="lh-copy flex justify-center">
                            <Link to="signup">
                                <p className="f6 link underline dim black db pointer near-white">Signup</p>
                            </Link>
                        </div>
                    </div>
                </main>
          </article>
        );
    }
}

export default Login;