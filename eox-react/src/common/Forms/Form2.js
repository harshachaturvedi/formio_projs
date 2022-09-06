import React from "react";
import eoxLogo from "../../assets/eox_logo.png";
import { initAuth, Form } from '@formio/react';
import axios from "axios";
const baseurl = "https://eoxproductsupport.form.io"

const Form2 = () => {
  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" />{" "}
      PTO App
    </h3>
  );
  const handleSubmit = (request, response) => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      console.log(`Got the data from the json users ${response.data}`);
    });
  }

  return (
    <div className="text-center" style={{ marginTop: "1px" }}>
      <Title />
      <Form src="https://eoxproductsupport.form.io/ptoindia" onSubmit={handleSubmit} />
    </div>
  );
};

export default Form2;
