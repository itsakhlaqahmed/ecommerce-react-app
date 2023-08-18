/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import DropdownCategories from "./DropdownCategories";
import {FaUserCircle,  FaCartPlus, FaBars, FaSignOutAlt } from 'react-icons/fa';
import { isAuth, signOut } from "./common/auth/helpers";

const Nav = () => {
    return (
        <nav className="navbar">
            <Link to='/' className="nav-brand">X-Plore</Link>
            
            {/* <button className="navbar-toggler"><FaBars /></button> */}

            <div className="nav-items">
                <ul className="collapse navbar-collapse">
                        <Link to='/' className="nav-link">Home</Link>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                        <DropdownCategories />
                    </li>
                    <li className="nav-item">
                        <Link to='/deals' className="nav-link">Deals</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/new' className="nav-link">What's new</Link>
                    </li>

                </ul>
                
                <SearchBar className="nav-item"/>

                <div className="end">   
                    { 
                    isAuth() 
                    ? 
                    <Fragment >
                    <a href="/" className="account-icon nav-item" onClick={() => signOut()}><FaSignOutAlt /></a>
                    <a href="#" className="cart-icon nav-item"><FaCartPlus /></a>
                    </Fragment> 
                    :
                    <Fragment>
                        <div className="nav-item">
                            <Link to='/login' className="nav-link nav-btn ">Login</Link>
                        </div>
                        <div className="nav-item">
                            <Link to='/signup' className="nav-link nav-btn">Signup</Link>
                        </div>
                        {/* <butt
                        {/* <button className="primary-btn blue">Login</button>
                        <button className="primary-btn">Signup</button> */}
                    </Fragment>
                    }
                </div>
                
            </div>
        </nav>
    );
};

export default Nav;
