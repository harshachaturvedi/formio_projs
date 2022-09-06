import React from "react";
import eoxLogo from "../../assets/eox_logo.png";
import { initAuth, Form } from "@formio/react";

const axios = require('axios');
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
    console.log(`The data received = ${request.data.name}`);
    // response.data = "Harsha has changed this to tested";
    // request.data.name = "Finished Testing";
    const user = {
      name: this.state.name
    }
    axios.post('https://jsonplaceholder.typicode.com/users', {user}).then((res) => {
      console.log("I am inside the axios")
      console.log(`Got the data from the json users ${res.data}`);
      window.location = "/Form2"
      console.log(request);
    });
  };
  // const useEffect(() => {
  //   axios.get("https://api.form.io/").then((response) => {
  //   // setPokemon(response.data);
  //   console.log(response.data);
  //   // setLoading(false);
  //   })
  // }, []);

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
