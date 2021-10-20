import React from 'react';
import { Badge, Button, Form, Nav } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import Login from '../Login/Login/Login';
import './Register.css';

const Register = () => {
    const {signInUsingGoogle,handleNameChange,handleEmailChange,handlePasswordChange, handleResistration,error,user,isLogin} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = ()=>{
      signInUsingGoogle()
      .then(result =>{
          history.push(redirect_uri)
      })
  }
    return (
        <div className='container p-5'>
             
            {!isLogin ? <div>
                {user?.email ?  <Badge className="p-2 my-5 fs-1" bg="success">Successfully Login</Badge>
            : <div><Form onSubmit={handleResistration}>
                <h1>Please Registerr</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={handleNameChange} placeholder="name" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
  </Form.Group>
 {<Nav.Link as={HashLink} to="/login">Already have an account?</Nav.Link>}
  <p className="text-danger">{error}</p>

  {/* <Button variant="primary"  type="submit">
  {isLogin ?'Login' : 'Resister'}
  </Button> */}
  <Button variant="primary"  type="submit">
  Resister
  </Button>
  
 
</Form><h2>Please Login using Google</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button> </div>


}
            </div> :  <Login></Login>}

            {/* <h2>Please Login using Google</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button> */}
        </div>
    );
};

export default Register;