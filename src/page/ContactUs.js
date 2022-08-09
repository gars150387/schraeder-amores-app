import React, { useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { RiMailSendLine } from "react-icons/ri";

import "./contactUs.css";

export const ContactUs = () => {
  const [validated, setValidated] = useState(false);

  const formFormat = useRef();

  const sendEmail = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      emailjs
        .sendForm(
          "service_r34oy0p",
          "template_wyvlhwq",
          event.target,
          "CjIn85qPg0cTwf8qc"
        )
        .then(
          (result) => {
            Swal.fire({
              title: "Message sent!",
              text: "Thank you for your message",
              icon: "success",
              confirmButtonColor: "#006400",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          },
          (error) => {
            Swal.fire({
              title: "Oopss...",
              text: "Something went wrong",
              icon: "error",
              cancelButtonColor: "#8b0000",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        );
      event.target.reset();
    }
  };

  return (
    <div>
      <form className="contact-form" ref={formFormat} onSubmit={sendEmail}>
        <h2>Contact us</h2>
        <div>
          <Row className="col-10 m-auto mb-3 row-contact">
            <label className="col-md-4">Name</label>
            <input className="col-md-8" type="text" name="name" />
            <label className="col-md-4 mt-2">Email</label>
            <input className="col-md-8 mt-2" type="email" name="email" />
            <label className="col-md-4 mt-2">Subject</label>
            <input className="col-md-8 mt-2" type="text" name="subject" />
            <label className="col-md-4 mt-2">Message</label>
            <textarea className="col-md-8 mt-2" name="message" />
            <Col className="col-md-4 mt-3"></Col>
            <button className="col-md-8 btn btn-success mt-3" type="submit">
              Send <RiMailSendLine />
            </button>
          </Row>
        </div>
      </form>
    </div>
  );
};
