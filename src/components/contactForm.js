import React, { useState, useEffect, useRef } from "react";
import { IoChevronForward } from "react-icons/io5";
import { PiSpinnerBold } from "react-icons/pi";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const formMessageRef = useRef(null);
  const [apiState, handleSubmit] = useForm("mvoekrak");
  const [showSuccessText, setShowSuccessText] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    reason: "",
    message: "",
  });
    
    const handleSend = () => {
        if (apiState.succeeded) {
          setShowSuccessText(true);
          setFormData({
            fullname: "",
            email: "",
            reason: "",
            message: "",
          });
        } else if (apiState.errors) {
          setShowSuccessText(true);
          formMessageRef.current.textContent =
            "Something went wrong. Please try again.";
          formMessageRef.current.style.backgroundColor = "tomato";
        }
    }

  const handleInput = ({ target: { name, value } }) => {
    setShowSuccessText(false);
    setFormData((s) => ({
      ...s,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="container-fluid">
      <div className="contactTexts">
        <p>let's talk</p>
        <p>Contact</p>
        <p>
          we are ready to give you the best of your idea, let's connect, make
          more money, and grow together.
        </p>
        <div className="contactDetails">
          <p>
            Phone:
            <span>
              <a href="tel:+2349067898371"> +2349067898371</a>
            </span>
          </p>
          <p>
            Address: <span> Dominion Estate AKpajo</span>
          </p>
          <p>
            Email:
            <span>
              <a href="mailto:info@elabsafrica.africa">
                info@elabsafrica.africa
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="contactForm">
        <p>send us a message</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
                      handleSubmit(e);
                      handleSend()
          }}
        >
          <input
            name="fullname"
            id="fullname"
            required
            onChange={handleInput}
            value={formData.fullname}
            minLength={2}
            type="text"
            placeholder="Full name"
          />
          <input
            type="email"
            onChange={handleInput}
            value={formData.email}
            name="email"
            id="email"
            placeholder="Email address"
            required
          />
          <input
            name="reason"
            onChange={handleInput}
            value={formData.reason}
            id="reason"
            required
            minLength={4}
            type="text"
            placeholder="Reason"
          />
          <textarea
            name="message"
            onChange={handleInput}
            value={formData.message}
            id="message"
            placeholder="Your message"
          ></textarea>

          {showSuccessText && (
            <div className="successMessage">
              <span
                className="closeButton"
                onClick={() => setShowSuccessText(false)}
              >
                x
              </span>
              <p ref={formMessageRef} className="successText">
                Your message has been sent successfully
              </p>
            </div>
          )}
          <button
            disabled={apiState.submitting}
            className={`primaryBtn ${apiState.submitting ? "sending" : null}`}
            type="submit"
          >
            <span>
              {apiState.submitting ? <PiSpinnerBold /> : <IoChevronForward />}
            </span>
            <span>send{apiState.submitting && "ing"} message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;