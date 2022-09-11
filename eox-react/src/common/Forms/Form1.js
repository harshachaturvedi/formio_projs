import React from 'react';
import axios from 'axios'
import { Form } from '@formio/react';
import Form2 from './Form2';

import eoxLogo from "../../assets/eox_logo.png";

const Form1 = () => {
  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" /> Task App
    </h3>
  );

  // Now handle the callback from the submit button in formio
  const handleSubmit = (request, response) => {

    console.log(`Form1:handleSubmit: The data received = ${request.data.name}`);
    // const name_id = request.data.name;
    axios.get(`https://jsonplaceholder.typicode.com/users/${request.data.name}`).then((res) => {
      let name = res.data.name
      let username = res.data.username
      let email = res.data.email
      console.log(`Name of for the ID is ${name}`);
      console.log(`Username of for the ID is ${username}`);
      console.log(`email of for the ID is ${email}`);
      <Form2
        id={name}
        username={username}
        email={email}
      />
      window.location = `/Form2?name=${name}&username=${username}&email=${email}`;
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

      // props.history.push({
      //   pathname: '/Form2',
      //   query: { fullName: `${res.data.name}`}
      // })
      // <Link to={{
      //   pathname: '/Forms2',
      //   query: { fullName: `${res.data.name}`}
      // }} > This is the state </Link >
      // <Switch>
      //   <Route exact path='/Form2' component={Form2}></Route>
      // </Switch>