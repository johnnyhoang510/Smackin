import React from "react";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { useState, useEffect } from "react";

const LoginForm = (props) => {
    const { login, errors, demoLogin, clearErrors } = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorsClass, setErrorsClass] = useState("login-no-errors")

    useEffect(() => {
        clearErrors();
    }, [])

    useEffect(() => {

        if (errors.length === 0) {
            setErrorsClass("login-no-errors")
        } else {
            setErrorsClass("login-errors-container")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        }

        login(user)
            // .then(() => props.history.push("/"));
            .then(() => props.history.goBack());
    }

    const handleDemoLogin = (e) => {
        e.preventDefault();

        const demoUser = {
            email: 'demouser@email.com',
            password: 'password'
        };

        demoLogin(demoUser)
            // .then(() => props.history.push("/"));
            .then(() => props.history.goBack());
    }

    const submitHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit(e);
        }
    }

    const displayErrors = () => {
        if (errors.length) {
            return errors.map((err, idx) => {
                return (
                    <div class="login-error-row">
                        <li className="login-form-error" key={`error-${idx}`}>{err}</li>
                        <p onClick={() => clearErrors()} className="login-errors-x"><BsX className="error-x" /></p>
                    </div>
                )
            });
        } else {
            return null;
        }
    }

    return (
        <div class="login">
            <div className="login-form">
                <header className="login-form-header">
                    <Link className="login-form-header-link" to="/">
                        <h1 className="login-form-header-title">smackin'</h1>
                        <img className="login-form-header-logo" src={window.logo} alt="logo" />
                    </Link>
                </header>

                <ul className={errorsClass}>
                        {displayErrors()}
                </ul>

                <div className="login-form-image-wrapper">
                    <form className="form-login" onKeyDown={(e) => submitHandler(e)}>
                        <h2 className="form-type-title">Log in to Smackin'</h2>

                        <div className="switch-form-header">
                            <h3 className="switch-form-subtitle">New to Smackin'?</h3>
                            <Link className="switch-form-link" to="/signup" >Sign Up</Link>
                        </div>
                        <p className="terms-login">By logging in, you agree to Smackin's Terms of Service and Private Policy.</p>

                        <div className="demo-user">
                            <button className="demo-button" onKeyDown={(e) => submitHandler(e)} onClick={(e) => handleDemoLogin(e)}>Continue as Demo User</button>
                        </div>
                        <br />

                        <div className="login-form-divider">OR</div>

                        <br />
                        <input className="login-input"
                            type="email"
                            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                            required
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

                        <h4 className="switch-form-login">New to Smackin'?
                            <Link className="switch-form-2" to="/signup" >Sign Up</Link>
                        </h4>
                    </form>

                    <img className="login-form-pic" src={window.signupPic} alt="" />
                </div>
                
            </div>
        </div>
    )
};

export default LoginForm;