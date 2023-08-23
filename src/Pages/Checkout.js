import React, { useState } from "react";
import Layout from "../components/common/auth/Layout";
import { FaCheckSquare } from "react-icons/fa";

const Checkout = () => {

    const [isValid, setIsValid] = useState(false);
    const [deliveryInfo, setDeliveryInfo] = useState({
        firstName: '', 
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        email: '',
        mobile: '',
    })
    const [cardDetails, setCardDetails] = useState ({
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
    })

    const {firstName, lastName, address, city, zipCode, email, mobile} = deliveryInfo;
    const {cardName, cardNumber, expiry, cvc} = cardDetails;

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    const handleDeliveryFormChange = (name) => (event) => {
        setDeliveryInfo({...deliveryInfo, [name]: event.target.value})
    }

    const handleCardFormChange = (name) => (event) => {
        setCardDetails({...cardDetails, [name]: event.target.value})
        
    }

    const validateForm = (e) => {
        console.log(deliveryInfo.firstName)
        e.preventDefault();
        if (firstName !== '' && lastName !== '' 
        && address !== '' && city !== '' 
        && mobile !== ''){
            setIsValid(true);

        }
    }
    

    return (

        <Layout>
            <div className="container">
                <div className="checkout-main">
                    {!isValid &&
                    <div className="form-container">
                        <div className="form-heading"><h2>Delivery Information</h2></div>
                        <form className="client-info-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="input-label">First Name*</label>
                                    <input value={deliveryInfo.firstName} type="text" placeholder="First Name" className="form-text-input mg-t-8" onChange={handleDeliveryFormChange('firstName')}/>
                                    {/* <div className="input-error">error</div> */}
                                </div>
                                <div className="form-group">
                                    <label className="input-label">Last Name*</label>
                                    <input required type="text" placeholder="Last Name" className="form-text-input mg-t-8" onChange={handleDeliveryFormChange('lastName')}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="input-label">Address*</label>
                                <input type="text" placeholder="Address..." className="form-text-input mg-t-8" onChange={handleDeliveryFormChange('address')}/>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="input-label">City*</label>
                                    <input type="text" placeholder="Type here..." className="form-text-input mg-t-8" onChange={handleDeliveryFormChange('city')}/>
                                </div>
                                <div className="form-group">
                                    <label className="input-label">Zip Code</label>
                                    <input type="text" placeholder="Type here..." className="form-text-input mg-t-8" onChange={handleDeliveryFormChange('zipCode')}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="input-label">Email*</label>
                                    <input type="text" placeholder="abc@gmail.com" className="form-text-input mg-t-8" onChange={handleDeliveryFormChange('email')}/>
                                </div>
                                <div className="form-group">
                                    <label className="input-label" onFocus={()=>alert('f')}>Mobile*</label>
                                    <input type="text" placeholder="+92 XXX XXXXXXX" className="form-text-input mg-t-8" onChange={handleDeliveryFormChange('mobile')}/>
                                </div>
                            </div>
                            <button className="form-btn-lg" onClick={validateForm}>Continue...</button>
                        </form>
                    </div>
                    }

                    <div className="form-container">
                    <h2 className="form-heading">Card Information</h2>
                        <form className="client-info-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="input-label">Card Holder Name*</label>
                                    <input type="text" placeholder="Name" className="form-text-input mg-t-8" onChange={handleCardFormChange('cardName')}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="input-label">Card Number*</label>
                                <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="form-text-input mg-t-8" onChange={handleCardFormChange('cardNumber')}/>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="input-label">Expriy*</label>
                                    <input type="text" placeholder="00-00" className="form-text-input mg-t-8" onChange={handleCardFormChange('expiry')}/>
                                </div>
                                <div className="form-group">
                                    <label className="input-label">CVC*</label>
                                    <input type="text" placeholder="000" className="form-text-input mg-t-8" onChange={handleCardFormChange('cvc')}/>
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