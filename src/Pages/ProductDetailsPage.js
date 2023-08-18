import React, { Fragment, useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../components/core/ProductContext";
import Nav from "../components/Nav";
import { FaPlus, FaMinus } from "react-icons/fa";



const ProductDetailsPage = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const [product, setProduct] = useState({title: '', description: '', image: '', price:''});
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        let product = products.filter((product) => product.id === parseInt(id))
        setProduct(product[0]);
        console.log('product', product)

    }, [id, products]);




    const Product = () => {
        return (
            <div className="container">
                <div className="img-container">
                    <div className="main-img">
                        <img src={product?product.image:null} alt={product.title || "product-img"} />
                    </div>
                    <div className="product-img-gallery">
                        {/* <button className="gallery-btn btn-left">the btn</button> */}
                        <div className="img-gallery-item">
                            <img src={product?product.image:null} alt="" />
                        </div>
                        <div className="img-gallery-item">
                            <img src={product?product.image:null} alt="" />
                        </div>
                        <div className="img-gallery-item">
                            <img src={product?product.image:null} alt="" />
                        </div>
                        <div className="img-gallery-item">
                            <img src={product?product.image:null} alt="" />
                        </div>
                        {/* <button className="gallery-btn btn-right"></button>      */}
                    </div>
                </div>
                <div className="right-panel">
                    <div className="product-details">
                        <h1 className="product-page-title">{product.title || 'Title'}</h1>
                        <p className="product-description">{(product.description || '') || 'description'}</p>
                    <span className="gray-line"></span>
                    </div>
                    <div className="product-price-section">
                        <h2 className="product-price-lg">{'Rs. ' + product.price || 'Rs. 123'}</h2>
                        <span className="gray-line"></span>
                    </div>
                    <div className="color-options-section">
                        <h4 className="color-options-heading">Choose a color</h4>
                        <div className="color-pane-container radio-group">
                            <div className="color-option radio" style={{backgroundColor: 'blue'}}></div>
                            <div className="color-option radio" style={{backgroundColor: 'black'}}></div>
                            <div className="color-option"></div>
                        </div>
                        <span className="gray-line"></span>
                    </div>
                    <div className="buy-actions-section">
                        <div className="quantity-input-container">
                            <button className="quantity-modifier-btn quantity-modifier-btn-left" onClick={()=>setQuantity(quantity>1?parseInt(quantity) - 1:1)}><FaMinus /></button>
                            <input className="quantity-input" value={quantity} type="text" onChange={(e) => setQuantity(e.target.value)}/>
                            <button className="quantity-modifier-btn quantity-modifier-btn-right" onClick={()=>setQuantity(parseInt(quantity) + 1)}><FaPlus /></button> 
                        </div>
                        <div className="btn-section">
                            <button className="buy-btn primary-btn">Buy Now</button>
                            <button className="add-cart-btn primary-btn">Add to Cart</button>
                        </div>
                    </div>
                    <div className="extra-info">
                        <div className="info-card">
                            <h4 className="mini-title">Free delivery</h4>
                            <p className="description"></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

   

    return (
        <Fragment>
            <Nav />
            <Product />
        </Fragment>
    )
}

export default ProductDetailsPage;