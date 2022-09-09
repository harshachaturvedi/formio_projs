import React from 'react';
import {Link} from 'react-router-dom';
import eoxLogo from "../../assets/eox_logo.png";
import axios from 'axios'
import { Form } from "@formio/react";

const Form1 = () => {
  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" /> Task
      App
    </h3>
  );

  const handleSubmit = (request, response) => {
    console.log(`Form1:handleSubmit: The data received = ${request.data.name}`);
    const name_id = request.data.name;
    axios.get(`https://jsonplaceholder.typicode.com/users/${name_id}`).then((res) => {
      console.log(`Jsonplaceholder: API callback = ${res.data}`)
      console.log(`Name of for the ID is ${res.data.name}`);
      <Link to={{
        pathname: '/Forms2',
        query: { fullName: `${res.data.name}`}
      }} > This is the state </Link >
      window.location = "/Form2"
    });
  };
  return (
    <div className="text-center" style={{ marginTop: "1px" }}>
      <Title />
      <Form
        src="https://eoxproductsupport.form.io/1taskhc"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Form1;
