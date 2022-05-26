import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from '../Navigation';
import Landing from '../../pages/Landing';
import SignUp from '../../pages/SignUp';
import LogIn from '../../pages/LogIn';
import UpdateProfile from "../../pages/Update"
import PasswordForget from '../../pages/PasswordForget';
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import * as ROUTES from '../../constants/routes';
import { AuthProvider } from "../Firebase/context"
import PrivateRoute from "../PrivateRoute";

const App = () => (

  <Container className="d-flex align-items-center justify-content-center" style={{ maxHeight: "100vh" }}>
    <div className="w-100">
      <Router>
        <AuthProvider>
          <div>
            <Routes>
              <Route exact path={ROUTES.LANDING} element={<PrivateRoute><Landing /></PrivateRoute>} />
              <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
              <Route path={ROUTES.SIGN_IN} element={<LogIn />} />
              <Route path={ROUTES.UPDATE} element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
              <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForget />} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </div>
  </Container>

);

export default App;