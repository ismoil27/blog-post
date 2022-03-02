import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops! Sorry something went wrong</h1>
      <p>This page can not be found!</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;
