import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";



const ProductCard = ({id, title, description, price, image}) => {

   
    return (
        <div key={id} className="product-card" >
            <div className="product-img">
                <img src={image || 'hattps://static-01.daraz.pk/p/39e7f90b0e8376b7e44637d6b3effe50.jpg'} alt={title} />
            </div>
            <div className="product-body">
                <Link to={`/products/product/${id}`} className="product-link" >
                    <div className="product-body-row1">
                        <h4 className="product-title">{(title || '').slice(0,32)+ '...' || 'Beats Solo3'}</h4>
                        <p className="product-price">{`Rs. ${price || '1,000'}`}</p>
                    </div>
                
                    <p className="product-description">{(description || '').slice(0,36)  || "Beats Solo Wireless Headphones HHHHH fdf dsfad".slice(0,36)}</p>
                </Link>
                <button className="cart-btn" >Add to Cart</button>
            </div>
        </div>
    )
}


export default ProductCard;