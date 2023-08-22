import React from "react";
import Layout from "../components/common/auth/Layout";

const Checkout = () => {
    return (

        <Layout>
            <div className="container">
                <div className="checkout-main">
                    <div className="form-container">
                        <h2 className="form-heading">Delivery Information</h2>
                        <form className="client-info-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="input-label">First Name</label>
                                    <input type="text" placeholder="First Name" className="form-text-input mg-t-8"/>
                                </div>
                                <div className="form-group">
                                    <label className="input-label">Last Name</label>
                                    <input type="text" placeholder="Last Name" className="form-text-input mg-t-8"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="input-label">Address</label>
                                <input type="text" placeholder="Address..." className="form-text-input mg-t-8"/>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="input-label">City</label>
                                    <input type="text" placeholder="Type here..." className="form-text-input mg-t-8"/>
                                </div>
                                <div className="form-group">
                                    <label className="input-label">Zip Code</label>
                                    <input type="text" placeholder="Type here..." className="form-text-input mg-t-8"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="input-label">Email</label>
                                    <input type="text" placeholder="abc@gmail.com" className="form-text-input mg-t-8"/>
                                </div>
                                <div className="form-group">
                                    <label className="input-label">Mobile</label>
                                    <input type="text" placeholder="+92 XXX XXXXXXX" className="form-text-input mg-t-8"/>
                                </div>
                            </div>

                            <button className="form-btn-lg">Continue...</button>
                        </form>
                    </div>

                    <div className="form-container">
                    <h2 className="form-heading">Card Information</h2>
                        <form className="client-info-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="input-label">Card Holder Name*</label>
                                    <input type="text" placeholder="Name" className="form-text-input mg-t-8"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="input-label">Card Number*</label>
                                <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="form-text-input mg-t-8"/>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="input-label">Expriy*</label>
                                    <input type="text" placeholder="00-00" className="form-text-input mg-t-8"/>
                                </div>
                                <div className="form-group">
                                    <label className="input-label">CVC*</label>
                                    <input type="text" placeholder="000" className="form-text-input mg-t-8"/>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="order-details"></div>
                </div>
            </div>
        </Layout>
    )
}


export default Checkout;