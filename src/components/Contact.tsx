import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    // Email Validation RegEx
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setNameError(name === "");
    setEmailError(email === "" || !emailRegex.test(email)); // Fügt E-Mail-Prüfung mit RegEx hinzu
    setMessageError(message === "");

    // Überprüfung, ob die E-Mail gültig ist
    if (!emailRegex.test(email)) {
      console.log("Invalid email format");
      return;
    }

    /* Uncomment below if you want to enable the emailJS */

    if (
      name !== "" &&
      email !== "" &&
      message !== "" &&
      emailRegex.test(email)
    ) {
      console.log("Sending email...");
      console.log(name, email, message);
      var templateParams = {
        message: message,
        from_name: name,
        reply_to: email,
        to_name: "Friedrich",
      };

      console.log(templateParams);
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
          templateParams,
          process.env.REACT_APP_EMAILJS_USER_ID || ""
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                InputLabelProps={{ shrink: false }}
                placeholder="Name*"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                InputLabelProps={{ shrink: false }}
                placeholder="E-Mail*"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={
                  emailError ? "Please enter a valid email address" : ""
                }
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              InputLabelProps={{ shrink: false }}
              placeholder="Message*"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
