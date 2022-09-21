import { React, useReducer } from 'react';
import axios from 'axios'
import { Form } from '@formio/react';
// import Form2 from './Form2';
import eoxLogo from "../../assets/eox_logo.png";
import { ACTION_TYPES } from "./postActionTypes";
import { INITIAL_STATE, postReducer } from './postReducer';


const Form1 = () => {

  const [state, setPost] = useReducer(postReducer, INITIAL_STATE)
  console.log(state);

  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" /> Task App
    </h3>
  );
  const testReducer = () => {
    setPost({
      type: 'POST_SUCCESS', payload: { 'name': 'Mehul', 'username': 'mkenia', 'email': 'mehul@eoxvantage.com' },
      'name': 'Raks', 'username': 'rakshithiddya', 'email': 'raks@eoxvantage.com'
    })
    const gstatus = setPost({ type: 'default' });
    console.log(`The gstatus = ${gstatus}`);
    const gname = setPost({ type: ACTION_TYPES.POST_NAME })
    const gusername = setPost({ type: ACTION_TYPES.POST_USERNAME })
    const gemail = setPost({ type: ACTION_TYPES.POST_EMAIL })
    console.log(`The data received = ${gname}, ${gusername}, ${gemail}`);
  }

  // Now handle the callback from the submit button in formio
  const handleSubmit = async(request, response) => {

    // setPost({ type: ACTION_TYPES.POST_REQUEST })
    console.log(`Form1:handleSubmit: The data:name received = ${request.data.name}`);
    console.log(`Form1:handleSubmit: The data:state received = ${request.data.state}`);
    const state = request.data.state;
    await axios.get(`https://jsonplaceholder.typicode.com/users/${request.data.name}`).then((res) => {
      state.name = res.data.name;
      state.username = res.data.username;
      state.email = res.data.email;
      console.log(`Name of for the ID is ${state.name}`);
      console.log(`Username of for the ID is ${state.username}`);
      console.log(`email of for the ID is ${state.email}`);
      setPost({ type: 'POST_SUCCESS', "name": state.name, "username": state.username, "email": state.email  })
      const lstate = setPost({type: ACTION_TYPES.POST_STATE});
      console.log(`The lstate = ${lstate}`);   
      const lname = setPost({ type: ACTION_TYPES.POST_NAME })
      const lusername = setPost({ type: ACTION_TYPES.POST_USERNAME })
      const lemail = setPost({ type: ACTION_TYPES.POST_EMAIL })
      console.log(`The data received = ${lname}, ${lusername}, ${lemail}`); 
      
      // // https://n8.eoxvantage.com/prod/v1/695be826-0a72-448b-9994-731f8eb8bf27/webhook
      // axios.post(`https://n8.eoxvantage.com/test/v1/83c3f827-7917-4b27-9dfb-c470b3a302f2`).then((res) => {
      //   console.log(`Got the data from the json users ${res.data}`);
      // });
      window.location = `/Form2?name=${state.name}&username=${state.username}&email=${state.email}`;

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

// if(data['producerNameList']){
//   for(var key in data['producerNameList']){
//     var item = {}
//     item.label = data['producerNameList'][key];
//     item.value = key;
//     values.push(item);
//   }
// }

