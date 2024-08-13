/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-brand">
                <a to='/' className="nav-brand">X-Plore </a>
                <p>Shop anything, anywhere</p>
            </div>
            <div className="links-column">
                <h4 className="link-heading">X-Plore</h4>
                <a href="#" className="footer-link">About us</a>
                <a href="#" className="footer-link">Blog</a>
                <a href="#" className="footer-link">Terms & Conditions</a>
                <a href="#" className="footer-link">Privacy Policy</a>

            </div>
            <div className="links-column">
                <h4 className="link-heading">Customer Care</h4>
                <a href="#" className="footer-link">Help Center</a>
                <a href="#" className="footer-link">How to Buy</a>
                <a href="#" className="footer-link">Returns & Refunds</a>
                <a href="#" className="footer-link">Contact us</a>
                <a href="#" className="footer-link">FAQs</a>
            </div>
            <div className="links-column">
                <h4 className="link-heading">Store</h4>
                <a href="#" className="footer-link">Shipping and Prices</a>
                <a href="#" className="footer-link">Payment Options</a>
                <a href="#" className="footer-link">Discounts</a>
                <a href="#" className="footer-link">International Shipping</a>
                <a href="#" className="footer-link">Shop</a>
            </div>
        </section>
    )
}

export default Footer;