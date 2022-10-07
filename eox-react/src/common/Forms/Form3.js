import React from "react";
import { Form } from "@formio/react";
import eoxLogo from "../../assets/eox_logo.png";

const Form3 = () => {
  const [formData, setFormData] = React.useState({firstName: "John", lastName: "Chaturvedi"});
  console.log(formData);

  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" /> Example
      App
    </h3>
  );
  return (
   <div>
      <Title></Title>
      <Form
            submission={{ data: formData }}
            src="https://example.form.io/example"
            onSubmit={(e) => {
               console.log(e)
               fetch(`https://api.github.com/users/${e.data.firstName}`)
                  .then((res) => res.json())
                  .then((data) => {
                     setFormData({ ...e.data, firstName: data.firstName, lastName: data.login });
                  });
               }
            }
      />
   </div>
  );
}
export default Form3;