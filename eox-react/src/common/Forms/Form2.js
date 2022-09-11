import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Form } from '@formio/react';
import eoxLogo from "../../assets/eox_logo.png";
import axios from "axios";


const Form2 = (props) => {
  const [searchParams] = useSearchParams();
  let name = searchParams.get("name");
  let username = searchParams.get("username");
  let email = searchParams.get("email");

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
      <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
      <p>Name = {name}</p>
      <p>Username = {username}</p>
      <p>email = {email}</p>
      <Title />
      <Form src="https://eoxproductsupport.form.io/pto" onSubmit={handleSubmit} />
    </div>
  );
};

export default Form2;