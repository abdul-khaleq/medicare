import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle,handleEmailChange,handlePasswordChange,handleResistration} = useAuth();
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
        <div>
             <h2>Please Login</h2>
            <form onSubmit={handleResistration}>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="your email"/>
                    <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            <h2>Please Login using Google</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;