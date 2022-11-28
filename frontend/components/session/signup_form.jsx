import React from "react";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { useState, useEffect } from "react";

const SignupForm = (props) => {
    const { errors, formType, demoLogin, clearErrors } = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [zipCode, setZipCode] = useState("");


    const handleSubmit = (e) => {
        // e.preventDefault();
        processForm()
            .then(() => props.history.goBack());
    }

    const update = (field) => {
        // return e => set({ [field]: e.currentTarget.value })
    }

    const handleDemoLogin = (e) => {
        e.preventDefault();
        let user = {
            email: 'demouser@email.com',
            password: 'password'
        };
        demoLogin(user)
            .then(() => props.history.goBack());        
    }

    const submitHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
        }
    }

    // const componentWillUnmount = ()=> {
    //     clearErrors();
    // }

        let showErrors;
        if (errors.length) {
            showErrors = errors.map( (err, idx) => {
                return (
                    <div>
                        <li className="session-form-error" key={`error-${idx}`}>{err}</li>
                        <p onClick={clearErrors} className="session-errors-x"><BsX className="error-x"/></p>
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

                        <form className="form" onKeyDown={submitHandler}>
                            <h2 className="form-type-title">Sign Up for Smackin'</h2>

                            <div className="switch-form-header">
                                <h3 className="signup-subtitle">Connect with great local businesses</h3>
                                <p className="terms-2">By continuing, you agree to Smackin’s Terms of Service and acknowledge Smackin’s Privacy Policy.</p>
                            </div>

                            <div className="demo-user">
                                <button className="demo-button" onKeyDown={submitHandler} onClick={handleDemoLogin}>Continue as Demo User</button>
                            </div>
                            <br />

                            <div className="session-form-divider">OR</div>

                            <br />
                            <input className="first-name-input"
                                type="text"
                                value={firstName}
                                onChange={update('first_name')}
                                placeholder="First Name"
                                
                            />
                            <input className="last-name-input"
                                type="text"
                                value={lastName}
                                onChange={update('last_name')}
                                placeholder="Last Name"
                                
                            />

                            <br />
                            <input className="signup-input"
                                type="email"
                                value={email}
                                onChange={update('email')}
                                placeholder="Email"
                                
                            />
                            <br />

                            <input className="signup-input"
                                type="password"
                                value={password}
                                onChange={update('password')}
                                placeholder="Password"
                                
                            />
                            <br />

                            <input className="signup-input"
                                type="text"
                                value={zipCode}
                                onChange={update('zip_code')}
                                placeholder="Zip Code"
                                
                            />
                            <br />
                            <button className="signup-login-submit" type="submit" onClick={handleSubmit}>{formType}</button>
                            <h4 className="switch-form-text">Already on Smackin'?
                                <Link className="switch-form" to="/login" onClick={clearErrors}>Log in</Link>
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
};

export default SignupForm;