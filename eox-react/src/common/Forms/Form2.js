import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from '@formio/react';
import eoxLogo from "../../assets/eox_logo.png";
import axios from "axios";
import { useGlobalState } from './GState';

const Form2 = ({route, navigation}) => {

  const prospectForm = "https://eoxproductsupport.form.io/prospectHC";
  const fullName = useGlobalState("fullname");
  const username = useGlobalState("username");
  const email = useGlobalState("email");
  // TBD: I should be getting the data in this form from the previous form
  // I have not been able figure this out. For now I am using useGlobalState
  // library. That seems to be working fine.
  // const { itemID, otherParams } = route.params;
  // const itemString = JSON.stringify(itemID);
  // const otherParamsString = JSON.stringify(otherParams);
  // console.log(`Stringified itemID = ${itemString}`);
  // console.log(`Stringified otherParams = ${otherParamsString}`);
  const [formData, setFormData] = useState({fullName: "Cap America", username: "caps", email: "caps@america.com"});
  console.log(formData);

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
  const handleLoad = (e) => {
    const eString = JSON.stringify(e);
    console.log(`Form2:handleLoad: The data received = ${eString}`);
    console.log(`Form2:handleLoad: The data:name received = ${e.data.prospectName}`);
    setFormData({ ...e.data, prospectName: fullName, });
  }

  return (
    <div className="text-center" style={{ marginTop: "1px" }}>
      <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
      <p>Name = {fullName}</p>
      <p>Username = {username}</p>
      <p>email = {email}</p>
      <Title />
      <Form src={prospectForm}
        onFormLoad={handleLoad}
        onSubmit={handleSubmit}
      />
      The full name = {useGlobalState('fullname')}
    </div>
  );
};

export default Form2;