import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/store-info">StoreInfo</Link>
      <Link to="/store-review">StoreReview</Link>
    </div>
  );
}

export default Header;