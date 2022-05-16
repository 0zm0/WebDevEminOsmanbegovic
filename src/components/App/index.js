import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import PasswordForget from '../PasswordForget';
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import * as ROUTES from '../../constants/routes';
import { AuthProvider } from "../Firebase/context"

const App = () => (

  <Container className="d-flex align-items-center justify-content-center" style={{ maxHeigh: "100vh" }}>
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <div>
            <Navigation />
            <hr />
            <Routes>
              <Route exact path={ROUTES.LANDING} element={<Landing />} />
              <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
              <Route path={ROUTES.SIGN_IN} element={<LogIn />} />
              <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForget />} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </div>
  </Container>

);

export default App;