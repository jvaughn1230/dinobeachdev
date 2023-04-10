import React, { useRef, useState } from "react";

import "./mailer.css";
import emailjs from "@emailjs/browser";

const Mailer = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_im0dedw",
        "template_opt1qwk",
        form.current,
        "6v8S2uMuWSq-Ac6F3"
      )
      .then((res) => {
        console.log("SUCCESS!", res);
        setValues({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
        setStatus("SUCCESS");
      })
      .catch((err) => {
        console.log("FAILED", err);
      });
  };

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="mailer__container">
      <form onSubmit={sendEmail} ref={form} className="mailer">
        <input
          className="inputStyles"
          type="text"
          name="firstName"
          value={values.firstName}
          placeholder=" First Name"
          onChange={handleChange}
          required
        />
        <input
          className="inputStyles"
          type="text"
          name="lastName"
          value={values.lastName}
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          className="inputStyles"
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="inputStyles"
          type="text"
          name="company"
          value={values.company}
          placeholder="Company Name"
          onChange={handleChange}
        />

        <select
          name="package"
          id="package"
          className={`$"inputStyles" col-span-1 md:col-span-2`}
        >
          <optgroup className="inputStyles">
            <option value="test">test</option>
            <option value="test2">test2</option>
          </optgroup>
        </select>

        <textarea
          className="textAreaStyles"
          name="message"
          value={values.message}
          placeholder="Your Message"
          onChange={handleChange}
          required
        />

        <input
          type="submit"
          value="send"
          className="contact__submit gradient-text"
        />
      </form>
    </div>
  );
};

export default Mailer;
