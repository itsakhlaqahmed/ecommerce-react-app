/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import AuthLayout from "./AuthLayout";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Nav from "../../Nav";
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { authenicate } from "./helpers";


const Login = () => {

    const navigateTo = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '', 
        buttonText: 'Login'
    })

    const {email, password, buttonText} = values;

    const handleChange = (name) => (event) => {
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = (e) => {
        e.preventDefault();
        setValues({...values, buttonText: 'Loging in...'})
        
        axios({
            method: 'POST',
            url: `https://fakestoreapi.com/users`,
            data: {email, password}
        }).then((res) => {
            
            setValues({...values, buttonText: 'Login Successful'})
            authenicate(res, () => {
                setValues({
                    email: '',
                    password: '',
                    buttonText: 'Login'
            }); 
            navigateTo('/');
            })

        }).catch(err => {
            console.log(err)
            setValues({...values, buttonText: 'Login'})
        })

    }


    return (
        <Fragment>
        <Nav />
        <AuthLayout leftPanel={''}>
            <div className="auth-panel">
                <div className="greeting">
                    <a to='/' className="brand">X-Plore</a>
                    <h1 className="greeting-heading">Welcome Again!</h1>
                </div>
                <div className="form-container">
                    <form className="login-form">
                        <div className="text-input-container">
                            <div className="form-group">
                                <input type="text" className="form-text-input" placeholder="Email" onChange={handleChange('email')}/>
                            </div>
                            <div className="form-group password-input-container">
                                <input type={showPassword?'text':'password'} onChange={handleChange('password')} className="form-text-input password-input" placeholder="Password"/>
                                <span className="show-password-icon" onClick={()=> setShowPassword(!showPassword)}>{showPassword? <FaRegEyeSlash /> :<FaRegEye />}</span>
                            </div>
                        </div>
                        <div className="extra-form-input">
                            <div className="remember-me-form-group">
                                <input type="checkbox" className="remember-me-checkbox" />
                                <label htmlFor="login-check-box">Remeber me</label>
                            </div>
                                <a href="#" className="forgot-password-link link">Forgot Password?</a>
                        </div>
                        <button type='submit' className="form-btn-lg" onClick={clickSubmit}>{buttonText}</button>
                    </form>
                </div>
                <div className="redirect-link">
                    <p>Don't have an account?<Link to="/signup">Signup</Link></p>
                </div>
            </div>
        </AuthLayout>
    </Fragment>
    )

}


export default Login;