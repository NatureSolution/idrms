import React from "react";
import { Link } from "react-router-dom";
import thumb from "../../Image/logo_n.png";

const Header = () => {
  return (
    <div>
      <nav className="flex flex-row my-5">
        <div className="basis-1/4 ml-10">
          <Link to="/">
            <img
              className="max-w-full h-10  hover:font-semibold text-amber-600"
              src={thumb}
              alt=""
            />
          </Link>
        </div>
        <div className="basis-1/2 ">
          <Link
            className="mx-5 font-semibold hover:font-bold text-orange-700"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="mx-5 font-semibold hover:font-bold text-orange-700"
            to="/about"
          >
            About
          </Link>
          <Link
            className="mx-5 font-semibold hover:font-bold text-orange-700"
            to="/download"
          >
            Download
          </Link>
        </div>
        <div className="basis-1/4">
          <div className="flex">
            <Link
              className="mx-5 font-semibold hover:font-bold text-orange-700"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="mx-5 font-semibold hover:font-bold text-orange-700"
              to="/signup"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                className="rounded-full w-8 mb-4 mx-auto"
                alt="Avatar"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
