import { React } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Form } from '@formio/react';
import eoxLogo from "../../assets/eox_logo.png";
import axios from "axios";
import { useGlobalState } from './GState';


const Form2 = ({route, navigation}) => {
  // TBC: How to get the data from the URL
  const [searchParams] = useSearchParams();
  let name = searchParams.get("name");
  let username = searchParams.get("username");
  let email = searchParams.get("email");

  // const { itemID, otherParams } = route.params;
  // const itemString = JSON.stringify(itemID);
  // const otherParamsString = JSON.stringify(otherParams);
  const fullName = useGlobalState("fullname");
  // console.log(`Stringified itemID = ${itemString}`);
  // console.log(`Stringified otherParams = ${otherParamsString}`);

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
      <p>Full name = {fullName}</p>
      <Title />
      <Form src="https://eoxproductsupport.form.io/prospectHC"
        onSubmit={handleSubmit}
      />
      The full name = {useGlobalState('fullname')}
    </div>
  );
};

export default Form2;