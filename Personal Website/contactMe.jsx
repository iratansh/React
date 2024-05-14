import React, { useRef } from "react";
import "./contactMe.css";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6meyomh", "template_d581cmw", form.current, {
        publicKey: "BNCxEmdpAWd2bBgXW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    form.current.reset();
  };

  return (
    <>
      <div className="final">
        <p id="contact">GET IN TOUCH</p>
        <div className="container-parent">
          <div className="container3">
            <div className="box5">
              <div className="informationBoxes">
                <p className="sinfo">EMAIL</p>
                <p className="sinfo">iratansh@ualberta.ca</p>
                <button className="contactButtons">
                  <a
                    href="mailto:iratansh@ualberta.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactButtons"
                  >
                    Email Me
                  </a>
                </button>
              </div>
            </div>

            <div className="box5">
              <div className="informationBoxes">
                <p className="sinfo">LINKEDIN</p>
                <p className="sinfo">Ishaan Ratanshi</p>
                <button className="contactButtons">
                  <a
                    href="https://www.linkedin.com/in/ishaan-ratanshi/"
                    target="blank"
                    rel="noopener noreferrer"
                    className="contactButtons"
                  >
                    Connect with Me
                  </a>
                </button>
              </div>
            </div>

            <div className="box5">
              <div className="informationBoxes">
                <p className="sinfo">GITHUB</p>
                <p className="sinfo">iratansh</p>

                <button className="contactButtons">
                  <a
                    href="https://github.com/iratansh"
                    target="blank"
                    rel="noopener noreferrer"
                    className="contactButtons"
                  >
                    Collaborate With Me
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="container4">
            <form id="name" ref={form} onSubmit={sendEmail} className="form">
              <input
                type="text"
                placeholder="Enter your name"
                className="inputs"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="inputs"
                name="user_email"
                required
              />
              <textarea
                name="message"
                cols="35"
                rows="10"
                placeholder="Enter your Message"
                className="inputs"
                required
              ></textarea>
              <button type="submit" className="emailButton">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
