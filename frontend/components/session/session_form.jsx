import React from "react";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";


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
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    handleSubmit(e) {
        // e.preventDefault();
        this.props.processForm(this.state)
            .then(() => this.props.history.goBack());
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleDemoLogin(e) {
        let user = {
            email: 'demouser@email.com',
            password: 'password'
        };
        this.props.handleDemoLogin(user)
            .then(() => this.props.history.goBack());        
    }

    submitHandler(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            this.handleSubmit();
        }
    }

    clearErrors() {
        this.props.clearErrors();
    }

    componentWillUnmount() {
        this.clearErrors();
    }


    render() {

        const { errors, formType } = this.props;

        let showErrors;
        if (errors.length) {
            showErrors = errors.map( (err, idx) => {
                return (
                    <div>
                        <li className="session-form-error" key={`error-${idx}`}>{err}</li>
                        <p onClick={this.clearErrors} className="session-errors-x"><BsX className="error-x"/></p>
                    </div>

                )            
            })
        };
        

        if (formType === "Log In") {
            return(
                <div>
                    <div className="signup-login-form">
                        <header className="session-form-header">
                            <Link className="session-form-header-link" to="/">
                                <h1 className="session-form-header-title">smackin'</h1>
                                <img className="session-form-header-logo" src={window.logo} alt="logo" />
                            </Link>
                        </header>

                        <form className="form" onKeyDown={this.submitHandler}>
                            <h2 className="form-type-title">Log in to Smackin'</h2>

                            <div className="switch-form-header">
                                <h3 className="switch-form-subtitle">New to Smackin'?</h3>
                                <Link className="switch-form-link" to="/signup" onClick={this.clearErrors}>Sign Up</Link>
                            </div>
                            <p className="terms">By logging in, you agree to Smackin's Terms of Service and Private Policy.</p>

                            <div className="demo-user">
                                <button className="demo-button" onKeyDown={this.submitHandler} onClick={this.handleDemoLogin}>Continue as Demo User</button>
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
                            <button className="signup-login-submit" type="submit" onClick={this.handleSubmit}>{formType}</button>

                            <h4 className="switch-form-text-2">New to Smackin'?
                                <Link className="switch-form-2" to="/signup" onClick={this.clearErrors}>Sign Up</Link>
                            </h4>


                        </form>
                    </div>

                    <div className="login-errors-container">
                        <ul id="login-show-errors">
                            {showErrors}
                        </ul>
                    </div>
                </div>

            )

        } else if (formType === 'Sign Up') {
            return (
                <div>

                    <div className="signup-login-form">
                        <header className="session-form-header">
                            <Link className="session-form-header-link" to="/">
                                <h1 className="session-form-header-title">smackin'</h1>
                                <img className="session-form-header-logo" src={window.logo} alt="logo" />
                            </Link>
                        </header>

                        <form className="form" onKeyDown={this.submitHandler}>
                            <h2 className="form-type-title">Sign Up for Smackin'</h2>

                            <div className="switch-form-header">
                                <h3 className="signup-subtitle">Connect with great local businesses</h3>
                                <p className="terms-2">By continuing, you agree to Smackin’s Terms of Service and acknowledge Smackin’s Privacy Policy.</p>
                            </div>

                            <div className="demo-user">
                                <button className="demo-button" onKeyDown={this.submitHandler} onClick={this.handleDemoLogin}>Continue as Demo User</button>
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
                            <button className="signup-login-submit" type="submit" onClick={this.handleSubmit}>{formType}</button>
                            <h4 className="switch-form-text">Already on Smackin'?
                                <Link className="switch-form" to="/login" onClick={this.clearErrors}>Log in</Link>
                            </h4>


                        </form>
                    </div>

                    <div className="signup-errors-container">
                        <ul id="show-errors">
                            {showErrors}
                        </ul>
                    </div>

                </div>

            )
        }

    }
};

export default SessionForm;