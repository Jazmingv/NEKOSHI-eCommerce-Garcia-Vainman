import React from "react";
import { useState } from "react";

import "./ContactForm.css";

const ContactForm = (e) => {
  const [userId, setUserId] = useState([]);
  const [sentMail, setSentMail] = useState(false);

  const handleChange = (tag, value) => {
    setUserId({ ...userId, [tag]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValidForm = validateForm();
    if (isValidForm) {
      setSentMail(true);
      Array.from(document.querySelectorAll("input, textarea")).forEach(
        (input) => (input.value = "")
      );
    }
  };

  const validateForm = () => {
    const email = validateEmail();
    const phone = userId.phone.toString().length;
    if (!userId.fname) {
      alert("Please enter your name");
      return false;
    } else if (!userId.lname) {
      alert("Please enter your last name");
      return false;
    } else if (phone < 8) {
      alert("Please enter correct phone number");
      return false;
    } else if (!userId.message) {
      alert("Please enter your message");
      return false;
    } else if (email === false) {
      return false;
    } else {
      return true;
    }
  };

  const validateEmail = () => {
    var emailID = userId.email;
    const atpos = emailID.indexOf("@");
    const dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || dotpos - atpos < 2) {
      alert("Please enter correct email ID");
      return false;
    }
    return true;
  };

  return (
    <>
      
      <div>
        <form className="contact-form">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            onChange={(e) => handleChange("fname", e.target.value)}
          />
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            onChange={(e) => handleChange("lname", e.target.value)}
          />
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Your phone.."
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            onChange={(e) => handleChange("message", e.target.value)}
          ></textarea>
          <input
            type="submit"
            onClick={(e) => handleFormSubmit(e)}
            value="Submit"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--dark)",
            }}
          />
        </form>
        {sentMail && (
          <div className="sent-mail">
            <p>
              Thank you for contacting me. I will get back to you as soon as
              possible.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
