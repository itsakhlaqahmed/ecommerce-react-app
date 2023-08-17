import React, { Fragment, useState, useRef } from "react";
import AuthLayout from "./AuthLayout";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Nav from "../../Nav";
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import useOutsideAlerter from "../../hooks/OutsideClickAlerter";
import axios from "axios";
import { authenicate, isAuth } from "./helpers";


const Signup = () => {

    const navigateTo = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        buttonText: 'Create Account'
    });
    const {firstName, lastName, email, password, buttonText} = values;

    // const [show, setShow] = useState(false); 
    // const dropdownRef = useRef(null);
    // useOutsideAlerter(dropdownRef, () => setShow(false));

    const handleChange = (name) => (event) => {
        setValues({...values, [name]: event.target.value})
    }

    const clickSubmit = (e) => {
        e.preventDefault();
        setValues({...values, buttonText: 'Creating Account...'})
        
        axios({
            method: 'POST',
            url: `https://fakestoreapi.com/users`,
            data: {name: {firstName, lastName}, email, password}
        }).then((res) => {
            
            console.log(res, res.message)
            setValues({...values, buttonText: 'Account Created'})
            navigateTo('/login')

        }).catch(err => {
            console.log(err)
            setValues({...values, buttonText: 'Create Account'})
        })

    }

    return (
        <Fragment>
            <Nav />
            <AuthLayout>
                <div className="auth-panel">
                    <div className="heading">
                        <h1>Signup</h1>
                    </div>
                    <div className="form-container">
                        <form className="signup-form">
                            <div className="form-row1">
                                <div className="form-group">
                                    <input type="text" value={firstName} placeholder="Name" className="form-text-input" onChange={handleChange('firstName')}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={lastName} placeholder="Last Name" className="form-text-input" onChange={handleChange('lastName')}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" value={email} placeholder="abc@gmail.com" className="form-text-input" onChange={handleChange('email')}/>
                            </div>
                            <div className="form-group password-input-container">
                                <input type={showPassword?'text':'password'} value={password} onChange={handleChange('password')} className="form-text-input password-input" placeholder="Password"/>
                                <span className="show-password-icon" onClick={()=> setShowPassword(!showPassword)}>{showPassword? <FaRegEyeSlash /> :<FaRegEye />}</span>
                            </div>
                            {/* <div className="form-group">
                                
                                <div className="dropdown" ref={dropdownRef}
                                onClick={clickHandler}
                                >

                                    <select name="Gender" id="" title="AB">
                                        <option value="Prefer Not Say">Male</option>
                                        <option value="Prefer Not Say">Female</option>
                                        <option value="Prefer Not Say">Prefer Not to Say</option>
                                    </select>
                                    <div className="dropdown-toggle">Gender</div>

                                    {
                                    show && <div className="dropdown-menu">
                                        <div className="dropdown-item">Male</div>
                                        <div className="dropdown-item">Female</div>
                                        <div className="dropdown-item">Prefer not to say</div>
                                    </div>
                                    }
                                </div> 
                            </div> */}
                            <button className="form-btn-lg" onClick={clickSubmit}>{buttonText}</button>
                        </form>

                        <div className="redirect-link">
                        <p>Already have an account?<Link to="/login">Login</Link></p>
                </div>
                    </div>

                </div>
            </AuthLayout>
        </Fragment>
    )
}



export default Signup;