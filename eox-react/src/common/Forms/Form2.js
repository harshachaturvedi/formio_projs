import React from 'react';
import eoxLogo from "../../assets/eox_logo.png";
import { Form } from '@formio/react';
import axios from "axios";
// const baseurl = "https://eoxproductsupport.form.io"

const Form2 = () => {
  // console.log(`The name got from screen 1 is ${fullName}`)
  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" />{" "}
      Time Off App
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
      {/* console.log(`ID = ${this.props.location.state.id}`);
      console.log(`Name = ${this.props.location.state.name}`);
      console.log(`email = ${this.props.location.state.email}`); */}
      <Form src="https://eoxproductsupport.form.io/pto" onSubmit={handleSubmit} />
    </div>
  );
};

export default Form2;
