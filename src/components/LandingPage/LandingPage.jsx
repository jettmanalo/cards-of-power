import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1 className='text-5xl'>LandingPage</h1>
      <ul>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
}

export default LandingPage;
