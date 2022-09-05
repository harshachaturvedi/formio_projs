import React from "react";
import axios from "axios";
import eoxLogo from "../../assets/eox_logo.png";
import { initAuth, Form } from '@formio/react';

const Form1 = () => {
  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" />{" "}
      PTO App
    </h3>
  );
const handleSubmit = () => {
  // event.preventDefault();
  const user = {
    name: this.state.name
  }
  axios.post('https://jsonplaceholder.typicode.com/users', { user })
    .then((res) => {
      console.log(res);
      console.log(res.data)
      window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
    })
}
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
      <Form src="https://eoxproductsupport.form.io/task" onSubmit={handleSubmit} />
    </div>
  );
};

export default Form1;
