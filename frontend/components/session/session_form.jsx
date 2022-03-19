import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    demoLogin(e) {
        e.preventDefault();
        let user = {
            email: 'demouser@email.com',
            password: 'password'
        };
        this.props.demoLogin(user);        
    }


    render() {

        const { errors, formType } = this.props;

        // let showErrors;
        

        if (formType === "Log In") {
            return(
                <div className="signup-login-form">
                    <header className="session-form-header">
                        <Link className="session-form-header-link" to="/">Smackin'</Link>
                        <Link className="session-form-header-logo" to="/">Logo goes here</Link>
                    </header>

                    <form className="form" onSubmit={this.handleSubmit}>
                        <h2 className="form-type-title">Log in to Smackin'</h2>
                        <h3 className="form-type-subtitle">New to Smackin'?</h3>
                        <Link className="switch-form-text" to="/signup">Sign Up</Link>
                        <p className="terms">By logging in, you agree to Smackin's Terms of Service and Private Policy</p>

                        <div className="demo-user">
                            <button onClick={this.demoLogin}>Continue as Demo User</button>

                        </div>


                        <input className="signup-login-input"
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            required
                        />
                        <br />

                        <input className="signup-login-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            required
                        />
                        <br />
                        <button className="signup-login-submit" type="submit">{formType}</button>
                        <p className="switch-form-text-2">New to Smackin'?</p>
                        <Link className="switch-form-2" to="/signup">Sign Up</Link>
                    </form>
                </div>
            )

        } else if (formType === 'Sign Up') {
            return (
                <div className="signup-login-form">
                    <header className="session-form-header">
                        <Link className="session-form-header-link" to="/">Smackin'</Link>
                        <Link className="session-form-header-logo" to="/">Logo goes here</Link>
                    </header>

                    <form className="form" onSubmit={this.handleSubmit}>
                        <h2 className="form-type-title">Sign Up for Smackin'</h2>
                        <h3 className="form-type-subtitle">Connect with great local businesses</h3>
                        <p className="terms">By continuing, you agree to Smackin’s Terms of Service and acknowledge Smackin’s Privacy Policy.</p>

                        <input className="signup-login-input"
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            required
                        />
                        <br />

                        <input className="signup-login-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            required
                        />
                        <br />
                        <button className="signup-login-submit" type="submit">{formType}</button>
                        <Link className="switch-form" to="/signup">Sign Up</Link>
                    </form>
                </div>
            )
        }

    }
};

export default SessionForm;