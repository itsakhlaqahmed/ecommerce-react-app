import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <div>
      <div className="contactSection">
        <h2>Contact Us</h2>
        <div className="contactInfo">
          <div className="contactAddress">
            <div className="address">
              <h3>Store in London</h3>
              <p>
                1418 River Drive, Suite 35 Cottonhall, CA 9622
                <br /> United Kingdom
              </p>
              <p>
                admin@dummymail.com
                <br />
                111 000 123
              </p>
            </div>
            <div className="address">
              <h3>Store in Karachi</h3>
              <p>
                Tariq Road, Karachi
                <br /> Pakistan
              </p>
              <p>
                contact@dummymail.com
                <br />
                111 000 123
              </p>
            </div>
          </div>
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name *"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email address *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
