import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "./core/ProductContext";
import { useNavigate } from "react-router-dom";
import useOutsideAlerter from "./hooks/OutsideClickAlerter";

const SearchBar = ({className}) => {

    const [result, setResult] = useState('');
    const [search, setSearch] = useState('');
    const [show, setShow]     = useState(false);
    const {products} = useContext(ProductContext);
    const dropdownRef = useRef(null);
    const navigateTo = useNavigate();

    useOutsideAlerter(dropdownRef, () => setShow(false));

    useEffect(() => {
        if (search === '') {
            setResult('')
            return
        }
        if (products){
            let items = products.filter((item) => {
            if(item.title.toLowerCase().includes(search)){
                return true
            }
            return false;
        })

        setResult(items)

        }
    }, [products, search])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (search !== ''){
            navigateTo(`/search/${search}`);
            setSearch('')
        }
    }

    return (
        <div className="search-bar" ref={dropdownRef}>
            <form action="" className={`form-inline search-form ${className}`}>
                <input type="text" value={search} placeholder="Search Product" className="form-control" onFocus={()=> setShow(true)}  onChange={handleChange}/>
                <button className="search-btn" onClick={handleClick}>Search</button>
            </form>
            {
            (result && show) &&
            <div className="dropdown-menu" >
                {
                    result.map((item) => {
                        return (
                            <a href={`/products/product/${item.id}`} key={item.id} className="dropdown-search-item-wrapper">
                                    <div className="title-img-wrapper">
                                        <div className="thumbnail"><img src={item.image} alt={item.title} /></div>
                                        <div><h5>{item.title}</h5></div>
                                        
                                    </div>
                                    <h5 className="item-price">Rs. {item.price}</h5>
                            </a>
                        )
                    })
                }
            </div>
            }

        </div>
)
}


export default SearchBar;