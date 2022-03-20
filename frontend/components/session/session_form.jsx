import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            zip_code: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
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

    clearErrors() {
        this.props.clearErrors();
    }


    render() {

        const { errors, formType } = this.props;

        let showErrors;
        if (errors.length) {
            showErrors = errors.map( (err, idx) => (
                <li key={idx}>{err}</li>
            ))
            let error = document.getElementById('errors');
            error.classList.add('errors')
        };
        

        if (formType === "Log In") {
            return(
                <div className="signup-login-form">
                    <header className="session-form-header">
                        <Link className="session-form-header-link" to="/">smackin'</Link>
                        <Link className="session-form-header-logo" to="/">(Logo goes here)</Link>
                    </header>

                    <form className="form" onSubmit={this.handleSubmit}>
                        <h2 className="form-type-title">Log in to Smackin'</h2>

                        <div className="switch-form-header">
                            <h3 className="switch-form-subtitle">New to Smackin'?</h3>
                            <Link className="switch-form-link" to="/signup" onClick={this.clearErrors}>Sign Up</Link>
                        </div>
                        <p className="terms">By logging in, you agree to Smackin's Terms of Service and Private Policy.</p>

                        <div className="demo-user">
                            <button className="demo-button" onClick={this.demoLogin}>Continue as Demo User</button>
                        </div>
                        <br />

                        <div className="session-form-divider">OR</div>

                        <br />
                        <input className="login-input"
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            required
                        />
                        <br />

                        <input className="login-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            required
                        />
                        <br />
                        <button className="signup-login-submit" type="submit">{formType}</button>

                        <h4 className="switch-form-text-2">New to Smackin'?
                            <Link className="switch-form-2" to="/signup" onClick={this.clearErrors}>Sign Up</Link>
                        </h4>

                        <div className="errors-container">
                            <ul id="errors">
                                {showErrors}
                            </ul>
                        </div>

                    </form>
                </div>
            )

        } else if (formType === 'Sign Up') {
            return (
                <div className="signup-login-form">
                    <header className="session-form-header">
                        <Link className="session-form-header-link" to="/">smackin'</Link>
                        <Link className="session-form-header-logo" to="/">(Logo goes here)</Link>
                    </header>

                    <form className="form" onSubmit={this.handleSubmit}>
                        <h2 className="form-type-title">Sign Up for Smackin'</h2>

                        <div className="switch-form-header">
                            <h3 className="signup-subtitle">Connect with great local businesses</h3>
                            <p className="terms-2">By continuing, you agree to Smackin’s Terms of Service and acknowledge Smackin’s Privacy Policy.</p>
                        </div>

                        <div className="demo-user">
                            <button className="demo-button" onClick={this.demoLogin}>Continue as Demo User</button>
                        </div>
                        <br />

                        <div className="session-form-divider">OR</div>

                        <br />
                        <input className="first-name-input"
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            placeholder="First Name"
                            required
                        />
                        <input className="last-name-input"
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            placeholder="Last Name"
                            required
                        />

                        <br />
                        <input className="signup-input"
                            type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            required
                        />
                        <br />

                        <input className="signup-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            required
                        />
                        <br />

                        <input className="signup-input"
                            type="text"
                            value={this.state.zip_code}
                            onChange={this.update('zip_code')}
                            placeholder="Zip Code"
                            required
                        />
                        <br />
                        <button className="signup-login-submit" type="submit">{formType}</button>
                        <h4 className="switch-form-text">Already on Smackin'?
                            <Link className="switch-form" to="/login" onClick={this.clearErrors}>Log in</Link>
                        </h4>

                        <div className="errors-container">
                            <ul id="errors">
                                {showErrors}
                            </ul>
                        </div>

                    </form>
                </div>
            )
        }

    }
};

export default SessionForm;