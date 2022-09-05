import React from "react";
import eoxLogo from "../../assets/eox_logo.png";
import { initAuth, Form } from '@formio/react';

const Form2 = () => {
  const Title = () => (
    <h3 className="title">
      Welcome to <img alt="React" src={eoxLogo} className="hero-image" />{" "}
      PTO App
    </h3>
  );

  return (
    <div className="text-center" style={{ marginTop: "1px" }}>
      <Title />
      <Form src="https://eoxproductsupport.form.io/ptoindia" onSubmit={console.log} />
      {/* useEffect(() => {
        axios.get(`${baseurl}api/v2/pokemon/5`).then((response) => {
            setPokemon(response.data);
            setLoading(false);
        });
      }, []); */}

    </div>
  );
};

export default Form2;
