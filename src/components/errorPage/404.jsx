import React from 'react';
import { Link } from 'react-router-dom';

const page404 = () => (
  <div className="row justify-content-center">
    <div className="col-md-12 text-center">
      <span className="display-1">404</span>
      <div className="mb-4 lead">
          The page
        <code>
          {' '}
          {window.location.pathname}
          {' '}
        </code>
          you are looking for was not found.
      </div>
      <Link to="/" className="btn btn-link">Back to Home</Link>
    </div>
  </div>
);

export default page404;
