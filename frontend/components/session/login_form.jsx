import React from "react";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { useState, useEffect } from "react";

const LoginForm = (props) => {
    const { login, errors, demoLogin, clearErrors } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        clearErrors();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        }

        login(user)
            .then(() => {
                clearErrors();
                props.history.push("/")
            });
    }

    const handleDemoLogin = (e) => {
        e.preventDefault();
        const demoUser = {
            email: 'demouser@email.com',
            password: 'password'
        };
        demoLogin(demoUser)
            .then(() => {
                clearErrors();
                props.history.push("/")
            });
    }

    const submitHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit(e);
        }
    }

    let displayErrors;
    if (errors.length) {
        displayErrors = errors.map((err, idx) => {
            return (
                <div>
                    <li className="session-form-error" key={`error-${idx}`}>{err}</li>
                    <p onClick={clearErrors} className="session-errors-x"><BsX className="error-x" /></p>
                </div>

            )
        })
    };

    return (
        <div>
            <div className="signup-login-form">
                <header className="session-form-header">
                    <Link className="session-form-header-link" to="/">
                        <h1 className="session-form-header-title">smackin'</h1>
                        <img className="session-form-header-logo" src={window.logo} alt="logo" />
                    </Link>
                </header>

                <form className="form" onKeyDown={(e) => submitHandler(e)}>
                    <h2 className="form-type-title">Log in to Smackin'</h2>

                    <div className="switch-form-header">
                        <h3 className="switch-form-subtitle">New to Smackin'?</h3>
                        <Link className="switch-form-link" to="/signup" onClick={() => clearErrors()}>Sign Up</Link>
                    </div>
                    <p className="terms">By logging in, you agree to Smackin's Terms of Service and Private Policy.</p>

                    <div className="demo-user">
                        <button className="demo-button" onKeyDown={(e) => submitHandler(e)} onClick={(e) => handleDemoLogin(e)}>Continue as Demo User</button>
                    </div>
                    <br />

                    <div className="session-form-divider">OR</div>

                    <br />
                    <input className="login-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        placeholder="Email"
                    />
                    <br />

                    <input className="login-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        placeholder="Password"
                    />
                    <br />
                    <button className="signup-login-submit" type="submit" onClick={(e) => handleSubmit(e)}>Log In</button>

                    <h4 className="switch-form-text-2">New to Smackin'?
                        <Link className="switch-form-2" to="/signup" onClick={clearErrors}>Sign Up</Link>
                    </h4>
                </form>
                
            </div>

            <div className="login-errors-container">
                <ul id="login-show-errors">
                    {displayErrors}
                </ul>
            </div>
        </div>

    )
};

export default LoginForm;