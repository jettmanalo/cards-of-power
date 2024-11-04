import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1 className='text-5xl'>Login</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
      </ul>
    </div>
  );
}

export default Login;
