import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404 .cloak__wrapper .cloak__container .cloak .info page</h1>
      <h2>We can't find that</h2>
      <p>
        We're fairly sure that page used to be here, but seems to have gone
        missing. We do apologise on it's behalf
      </p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
