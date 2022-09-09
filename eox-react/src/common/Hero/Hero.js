import React from "react";
import eoxLogo from "../../assets/eox_logo.png";
import { Form } from '@formio/react';

const Hero = () => {
  const Title = () => (
    <h3 className="title">
      This is the place <img alt="React" src={eoxLogo} className="hero-image" />{" "}
      PTO App
    </h3>
  );

  return (
    <div className="text-center" style={{ marginTop: "1px" }}>
      <Title />
      {/* <Form src="https://example.form.io/example" onSubmit={console.log} /> */}
      {/* useEffect(() => {
        axios.get(`${baseurl}api/v2/pokemon/5`).then((response) => {
            setPokemon(response.data);
            setLoading(false);
        });
      }, []); */}

      {/* <Form src="https://pro.formview.io/#/eoxproductsupport/task?header=1&reset=1&theme=cyborg&auth=1" onSubmit={console.log} /> */}
      <Form src="https://eoxproductsupport.form.io/task" onSubmit={console.log} />

      {/* <div className="row"> */}
      {/* <div className="col-sm-12 col-sm-offset-3 text-center"> */}
      {/* <p className="lead">
            You can easily embed your Forms and Resources into this application using.
          </p> */}

      {/* <div>
            <pre><code>{'<Form src="https://examples.form.io/example" />'}</code></pre>
          </div> */}

      {/* <p className="lead">Need Help?</p>

          <ul className="list-inline">
            <li className="mt-2">
              <a
                className="btn btn-lg btn-success"
                target="_blank" rel="noopener noreferrer"
                href="https://github.com/formio/react"
              >
                Embedding
              </a>
            </li>
            <li className="mt-2">
              <a
                className="btn btn-lg btn-success"
                target="_blank" rel="noopener noreferrer"
                href="http://help.form.io"
              >
                Documentation
              </a>
            </li>
          </ul> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Hero;
