import React from "react";
import "./ContactStyle.css";
function ContactFile() {
    return (
        <>
            <div className="container">
                <h1 className="heading">Contact Us</h1>
                <div className="content">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="content">
                    <input type="number" placeholder="Mobile Number" />
                    <input type="email" placeholder="Email ID" />
                </div>
                <div className="content">
                    <input type="email" placeholder="Email Id" />
                    <input type="text" placeholder="Address" />
                </div>
                <textarea placeholder="Message"></textarea>
                <button>Submit</button>
            </div>
        </>
    )
}
export default ContactFile;