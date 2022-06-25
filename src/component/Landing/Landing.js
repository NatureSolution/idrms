import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-black text-white h-100px">
      <div>
        <h1 className="text-6xl font-bold  pt-20">IDRMS</h1>
        <br />
        <br />

        <p>Collection fo Map, Graph, Data, Chart and reports of DRR</p>
      </div>
      <br />

      <div className="">
        <button className="bg-white text-black m-3 p-3 text-3xl font-bold rounded-lg shadow-xl">
          {" "}
          <Link to="/download">Download</Link>
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Link className="pb-10 mb-10" to="/about">
        {" "}
        about
      </Link>
    </div>
  );
};

export default Landing;
