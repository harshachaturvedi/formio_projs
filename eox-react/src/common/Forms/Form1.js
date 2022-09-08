import React from "react";
import eoxLogo from "../../assets/eox_logo.png";
import axios from 'axios'
import { initAuth, Form } from "@formio/react";

const Form1 = () => {
  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" /> Task
      App
    </h3>
  );
  const handleSubmit = (request, response) => {
    // event.preventDefault();
    // const user = {
    //   name: this.state.name
    // }
    // axios.post('https://jsonplaceholder.typicode.com/users', { user })
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data)
    //     window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
    //   })
    console.log(`Form1:handleSubmit: The data received = ${request.data.name}`);
    const name_id = request.data.name;
    axios.get(`https://jsonplaceholder.typicode.com/users/${name_id}`).then((res) => {
      console.log(`Jsonplaceholder: API callback = ${res.data}`)
      console.log(`Name of for the ID is ${res.data.name}`);
      window.location = "/Form2"
      console.log(request);
    });
  };
  return (
    <div className="text-center" style={{ marginTop: "1px" }}>
      <Title />
      <Form
        src="https://eoxproductsupport.form.io/task"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Form1;
