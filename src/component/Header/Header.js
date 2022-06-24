import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="flex flex-row text-lg font-medium py-5">
      <div class="basis-1/4">Logo</div>
      {/*  */}
      <div class="basis-1/2 ">
        <Link className="px-4" to="/home">
          Home
        </Link>
        <Link className="px-4" to="/about">
          About
        </Link>
        <Link className="px-4" to="/download">
          Download
        </Link>
      </div>
      {/*  */}
      <div class="basis-1/4">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
