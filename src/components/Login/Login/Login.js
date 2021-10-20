import React from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle,handleEmailChange,handlePasswordChange,handleLogin,error} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
    return (
        <div className='container p-5'>
             <h2>Please Login</h2>
             <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email"/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password"/>
  </Form.Group>
  {<Nav.Link as={HashLink} to="/register">New user?</Nav.Link>}
  <p className="text-danger">{error}</p>

  <Button variant="primary"  type="submit">
      Login
  </Button>
  
 
    </Form>








            <h2>Please Login using Google</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;