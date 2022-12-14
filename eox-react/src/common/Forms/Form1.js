import { React } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "@formio/react";
import eoxLogo from "../../assets/eox_logo.png";
import axios from "axios";
import { setGlobalState } from "./GState";

const taskForm = "https://eoxproductsupport.form.io/1taskhc";

const Form1 = () => {
  const navigate = useNavigate();
  setGlobalState("fullname", "Harsha Chaturvedi");
  setGlobalState("username", "harsha");
  setGlobalState("email", "harsha@eoxvantage.com");

  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" /> Task
      App
    </h3>
  );

  // Now handle the callback from the submit button in formio
  const handleSubmit = async (request) => {
    console.log(
      `Form1:handleSubmit: The data:name received = ${request.data.name}`
    );
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${request.data.name}`)
      .then((res) => {
        const fullName = res.data.name;
        const username = res.data.username;
        const email = res.data.email;
        console.log(`Form1:handleSubmit: Full Name = ${fullName}`);
        console.log(`Username of for the ID is ${username}`);
        console.log(`email of for the ID is ${email}`);
        setGlobalState("fullname", fullName);
        setGlobalState("username", username);
        setGlobalState("email", email);
        const params = `/Form2?fullname=${fullName}&username=${username}&email=${email}`;

        // // https://n8.eoxvantage.com/prod/v1/695be826-0a72-448b-9994-731f8eb8bf27/webhook
        // axios.post(`https://n8.eoxvantage.com/test/v1/83c3f827-7917-4b27-9dfb-c470b3a302f2`).then((res) => {
        //   console.log(`Got the data from the json users ${res.data}`);
        // });
        navigate('/Form2',{
          state: {
            fullName: fullName,
            usename: username,
            email: email,
            },
          search: params,
          }
        );
      });
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
      <Form src={taskForm} onSubmit={handleSubmit} />
    </div>
  );
};

export default Form1;
