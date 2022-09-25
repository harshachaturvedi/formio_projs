import React from "react";
import { Form } from "@formio/react";

const Form3 = () => {
   const [formData, setFormData] = React.useState({firstName: "John", lastName: "Chaturvedi"});
   // console.log(formData);
   const formData2 = setFormData(...formData);
   console.log(formData2);
   return (
   <div>
      <h1>Works</h1>
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