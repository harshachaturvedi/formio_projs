import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { initAuth } from '@formio/react';
import { useAuth, AuthPage } from './modules/auth';
import { FormProvider, FormsPage } from './modules/forms/form';
import { Footer, Header, Home, Loading, Modal, Form2, Form3 } from './common';
import { AppConfig } from './config';
import './App.scss';
import EventsPage from './modules/events/components/EventsPage';
import { Alerts, AlertsProvider } from './modules/alerts';

const App = () => {
  
  const { dispatch, state: { isActive } } = useAuth();

  useEffect(() => {
    initAuth()(dispatch);
  }, [dispatch]);

  return (
    <>
      { isActive ?
          (
            <Modal className="alert alert-info">
              <div className="d-flex flex-column align-items-center">
                <Loading style={{ marginBottom: ' 10px' }}/>
                Logging In...
              </div>
            </Modal>
          )
          : null
      }
      <div className="App">
        <Header/>
        <AlertsProvider>
          <Alerts/>
          <div className="container" id="main">
            { AppConfig.projectUrl === 'https://reactstarter.form.io' ?
                <div className="alert alert-warning">
                  This app is still configured to use the default project.
                  Be sure to create your own project in form.io and change the PROJECT_URL in src/config.js
                </div>
                : null
              }
           
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Form2" element={<Form2 />} />
              <Route path="/Form3" element={<Form3 />} />
              <Route path="/form/*" element={<FormsPage />} />
              <Route path="/event/*" element={ <FormProvider><EventsPage /></FormProvider>} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </div>
            {/* <Form src="https://example.form.io/example" onSubmit={console.log} /> */}
        </AlertsProvider>
        {/* {
        ReactDOM.render(
            <Form src="https://example.form.io/example" onSubmit={console.log} /> , document.getElementById('example')
          )
        } */}
        <Footer></Footer>
      </div>
    </>
  );
}



export default App;
