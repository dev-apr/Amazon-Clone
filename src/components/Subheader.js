import React from 'react';
import { Link } from 'react-router-dom';
import './Subheader.css';

export default function Subheader() {
  return (
    <>
      <div className="subheader">
        <Link to="/" className="all">
          <div>All</div>
        </Link>
        <Link to="/shirts" className="shirts">
          <div>Shirts</div>
        </Link>
        <Link to="/pants" className="pants">
          <div>Pants</div>
        </Link>
      </div>
    </>
  );
}
