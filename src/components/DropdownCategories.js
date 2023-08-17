/* eslint-disable jsx-a11y/anchor-is-valid */
// the above line ensures that the a(link) tags can have no link for this file

import React, {useContext, useRef, useState} from "react";
import { ProductContext } from "./core/ProductContext";
import useOutsideAlerter from "./hooks/OutsideClickAlerter";
import { Link } from "react-router-dom";


const DropdownCategories = () => {
    const { categories } = useContext(ProductContext);
    const [show, setShow] = useState(false); 
    const dropdownRef = useRef(null);
    useOutsideAlerter(dropdownRef, () => setShow(false));
    // console.log(categories);

    const clickHandler = (e) => {
        e.preventDefault();
        setShow(!show);
    }

    return (
        <div className="dropdown" ref={dropdownRef}
        onClick={clickHandler}
        >
            
            <a href="#" className="nav-link dropdown-toggle">Categories</a>

            {show && <div className="dropdown-menu">
                {
                categories.map((category,index) => {
                    return (
                        <Link to={`/category/${category}`} key={index} className="dropdown-item">{category.toUpperCase()}</Link>
                    )
                })
                }
            </div>}
        </div> 
    )   

}


export default DropdownCategories;