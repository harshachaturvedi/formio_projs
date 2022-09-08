import React from 'react';
import Form1 from '../Forms/Form1';
import Form2 from '../Forms/Form2';
import { useAuth } from '../../modules/auth';

const Home = () => {
  const { state: authState } = useAuth();

  const Greeting = () => {
    if (authState.user && authState.user.data) {
      return (
        <h3>
          Logged in user<strong>{ authState.user.data.email }</strong>!
        </h3>
      );
    }
  };

  return (
    <div>
      <Form1/>
      <div className="container">
        { authState.authenticated ? (
          <div className="well text-center">
            <Greeting/>
          </div>)
          : null
        }
      </div>
      <Form2/>
      <div className="container">
        { authState.authenticated ? (
          <div className="well text-center">
            <Greeting/>
          </div>)
          : null
        }
      </div>
    </div>
  );
};

export default Home;
