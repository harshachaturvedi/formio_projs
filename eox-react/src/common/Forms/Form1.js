import React from 'react';
import axios from 'axios'
import { Form } from '@formio/react';
import Form2 from './Form2';

import eoxLogo from "../../assets/eox_logo.png";

// const [userState, setUserState] = useState({ name : "", username : "", email : "" });

const Form1 = () => {

  // const handleSubmit = (request, response) => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
  //     console.log(`Got the data from the json users ${response.data}`);
  //     setUserState({ name: response.data.name, username: response.data.username, email: response.data.email });
  //   });
  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" /> Task App
    </h3>
  );

  // Now handle the callback from the submit button in formio
  const handleSubmit = (request, response) => {
    // Allow CORS request to be made
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    // axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    // axios.defaults.headers.post['Accept'] = 'application/json';
    // axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
    // axios.defaults.headers.post['Access-Control-Max-Age'] = '1800';
    // axios.defaults.headers.post['Access-Control-Expose-Headers'] = 'Content-Length, X-JSON';
    // axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept';
    // axios.defaults.headers.post['X-Frame-Options'] = 'SAMEORIGIN';
    // axios.defaults.headers.post['X-XSS-Protection'] = '1; mode=block';
    // axios.defaults.headers.post['X-Content-Type-Options'] = 'nosniff';
    // axios.defaults.headers.post['X-Download-Options'] = 'noopen';
    // axios.defaults.headers.post['X-Permitted-Cross-Domain-Policies'] = 'none';
    // axios.defaults.headers.post['Referrer-Policy'] = 'no-referrer';
    // axios.defaults.headers.post['X-Content-Security-Policy'] = 'default-src \'self\'';
    // axios.defaults.headers.post['X-WebKit-CSP'] = 'default-src \'self\'';

    console.log(`Form1:handleSubmit: The data received = ${request.data.name}`);
    // const name_id = request.data.name;
    // axios.get(`https://harshachaturvedi.app.n8n.cloud/webhook/1a4629e7-34b4-4d6a-a6fc-732d77cda4a0/webhook?name=${request.data.name}&username=${request.data.description}`).then((response) => {
    //   console.log(`Got the data from the n8n users ${response.data}`);
    // });
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