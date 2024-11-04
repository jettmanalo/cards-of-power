import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1 className='text-5xl'>Home</h1>
      <ul>
        <li><Link to="/battlefield">Battlefield</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/dictionary">Dictionary</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/workshop">Workshop</Link></li>
      </ul>
    </div>
  );
}

export default Home;
