import React from 'react';
import { Badge, Button, Form, Nav } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Login from '../Login/Login/Login';
import './Register.css';

const Register = () => {
    const {handleNameChange,handleEmailChange,handlePasswordChange, handleResistration,error,user,toggleLogin,isLogin} = useAuth();
    return (
        <div className='container p-5'>
             
            {!isLogin ? <div>
                {user?.email ?  <Badge className="p-2 my-5 fs-1" bg="success">Successfully Login</Badge>
            :<Form onSubmit={handleResistration}>
                <h1>Please Register</h1>
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <div className="text-center"><Form.Check onChange={toggleLogin} className="checkbox" type="checkbox" label="Already have an account?" /></div>
  </Form.Group>
  <p className="text-danger">{error}</p>

  <Button variant="primary"  type="submit">
  {isLogin ?'Login' : 'Resister'}
  </Button>
  
</Form>}
            </div> :  <Login></Login>}
        </div>
    );
};

export default Register;