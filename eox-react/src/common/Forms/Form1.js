import { React, useReducer } from 'react';
import axios from 'axios'
import { Form } from '@formio/react';
// import Form2 from './Form2';
import eoxLogo from "../../assets/eox_logo.png";
import { ACTION_TYPES } from "./postActionTypes";
import { INITIAL_STATE, postReducer } from './postReducer';


const Form1 = () => {

  // const [state, setPost] = useReducer(postReducer, INITIAL_STATE)
  // console.log(state);

  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" /> Task App
    </h3>
  );

  // Now handle the callback from the submit button in formio
  const handleSubmit = (request, response) => {

    // setPost({ type: ACTION_TYPES.POST_REQUEST })
    console.log(`Form1:handleSubmit: The data received = ${request.data.name}`);
    axios.get(`https://jsonplaceholder.typicode.com/users/${request.data.name}`).then((res) => {
      let name = res.data.name
      let username = res.data.username
      let email = res.data.email
      console.log(`Name of for the ID is ${name}`);
      console.log(`Username of for the ID is ${username}`);
      console.log(`email of for the ID is ${email}`);
      // setPost({ type: 'POST_SUCCESS', payload: { name, username, email }, name, username, email })
      // const lstatus = setPost({type: 'default'});
      // const lusername = setPost({ type: ACTION_TYPES.POST_NAME })
      // const lemail = setPost({ type: ACTION_TYPES.POST_EMAIL })
      // console.log(`The data received = ${lstatus.name}, ${lstatus.username}, ${lstatus.email}`); 
      // request.data.name = res.name;
      
      // https://n8.eoxvantage.com/prod/v1/695be826-0a72-448b-9994-731f8eb8bf27/webhook
      axios.post(`https://n8.eoxvantage.com/test/v1/83c3f827-7917-4b27-9dfb-c470b3a302f2`).then((res) => {
        console.log(`Got the data from the json users ${res.data}`);
      });
      window.location = `/Form2?name=${name}&username=${username}&email=${email}`;

    })
    // .then((data) => {
    //   console.log(`Data in Form1:handleSubmit: ${data}`);
    //   // setPost({ type: ACTION_TYPES.POST_SUCCESS, payload: data })
    // }).catch((error) => { 
    //   console.log(`Error in Form1:handleSubmit: ${error}`);
    //   setPost({ type: ACTION_TYPES.POST_FAILURE, error: error });
    // });
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