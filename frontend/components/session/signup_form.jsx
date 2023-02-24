import React from "react";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { useState, useEffect } from "react";

const SignupForm = (props) => {
    const { signup, errors, demoLogin, clearErrors } = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [errorsClass, setErrorsClass] = useState("signup-errors-container");

    useEffect(() => {
        clearErrors();
    }, [])

    useEffect(() => {

        if (errors.length === 0) {
            setErrorsClass("signup-errors-container")
        } else if (errors.length === 1) {
            setErrorsClass("signup-with-errors-1")
        } else {
            setErrorsClass("signup-with-errors")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            zip_code: zipCode
        }

        signup(user)
            .then(() => props.history.goBack());
    }

    const handleDemoLogin = (e) => {
        e.preventDefault();

        const demoUser = {
            email: 'demouser@email.com',
            password: 'password'
        };

        demoLogin(demoUser)
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
            return errors.map( (err, idx) => {
                return (
                    <div className="signup-error-row">
                        <li className="signup-form-error" key={`error-${idx}`}>{err}</li>
                        <p onClick={() => clearErrors()} className="signup-errors-x"><BsX className="error-x"/></p>
                    </div>
                )            
            });
        } else {
            return null;
        }
    }
        
    return (
        <div className="signup">

            <div className="signup-form">
                <header className="signup-form-header">
                    <Link className="signup-form-header-link" to="/">
                        <h1 className="signup-form-header-title">smackin'</h1>
                        <img className="signup-form-header-logo" src={window.logo} alt="logo" />
                    </Link>
                </header>

                <ul className={errorsClass}>
                        {displayErrors()}
                </ul>

                <div className="signup-form-image-wrapper">
                    <form className="form-signup" onKeyDown={(e) => submitHandler(e)}>
                        <h2 className="form-type-title-signup">Sign Up for Smackin'</h2>

                        <div className="switch-form-header-signup">
                            <h3 className="signup-subtitle">Connect with great local businesses</h3>
                            <p className="terms-signup">By continuing, you agree to Smackin's Terms of Service and acknowledge Smackin's Privacy Policy.</p>
                        </div>

                        <div className="demo-user-signup">
                            <button className="demo-button-signup" onKeyDown={(e) => submitHandler(e)} onClick={(e) => handleDemoLogin(e)}>Continue as Demo User</button>
                        </div>
                        <br />

                        <div className="signup-form-divider">OR</div>

                        <br />
                        <input className="first-name-input"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.currentTarget.value)}
                            placeholder="First Name"
                        />
                        <input className="last-name-input"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.currentTarget.value)}
                            placeholder="Last Name"
                        />

                        <br />
                        <input className="signup-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            placeholder="Email"
                        />
                        <br />

                        <input className="signup-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            placeholder="Password"
                        />
                        <br />

                        <input className="signup-input"
                            type="text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.currentTarget.value)}
                            placeholder="Zip Code"
                        />
                        <br />
                        <button className="signup-submit" type="submit" onClick={(e) => handleSubmit(e)}>Sign Up</button>
                        <h4 className="switch-form-text-signup">Already on Smackin'?
                            <Link className="switch-form-signup" to="/login" onClick={() => clearErrors()}>Log in</Link>
                        </h4>

                    </form>

                    <img className="signup-form-pic" src={window.signupPic} alt="" />
                </div>
            </div>
        </div>
    )
};

export default SignupForm;