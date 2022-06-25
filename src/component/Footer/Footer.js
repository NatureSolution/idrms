import React from "react";
import logo from "../../Image/logo_n.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckSquare,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div>
      <footer className="border-t border-gray-200">
        <div
          className="
          container
          flex flex-col flex-wrap
          px-4
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
        >
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <p
              className="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-blue-700
              md:justify-start
            "
            >
              <img src={logo} alt="" />
            </p>
            <p className="mt-2 text-sm text-justify text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium at sequi cum, impedit fuga in placeat illo eum minima
              possimus est perferendis distinctio explicabo eos natus
              consequuntur blanditiis odio optio?
            </p>
            <div className="flex mt-4">
              <input
                type="text"
                className="
                h-auto
                p-2
                text-sm
                border border-grey-light
                round
                text-grey-dark
              "
                placeholder="Your email address"
              />
              <button className="h-auto p-3 text-xs text-white bg-red-600 rounded-sm">
                Subscribe
              </button>
            </div>
            <div className="flex justify-between mt-4 lg:mt-2">
              <Link to="/">T</Link>
              <Link to="/">O</Link>
              <Link to="/">D</Link>
              <Link to="/">O</Link>
            </div>
          </div>
          <div className="justify-between w-full mt-4 text-center md:flex ">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                  <Link to="/">Link 1</Link>
                </li>
                <li>
                  <Link to="/">Link 1</Link>
                </li>
                <li>
                  <Link to="/">Link 1</Link>
                </li>
                <li>
                  <Link to="/">Link 1</Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                  <Link to="/">Link 1</Link>
                </li>
                <li>
                  <Link to="/">Link 1</Link>
                </li>
                <li>
                  <Link to="/">Link 1</Link>
                </li>
                <li>
                  <Link to="/">Link 1</Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                  <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckSquare} size="6x" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faSpinner} spin />
                </li>
                <li>
                  <Link to="/">Link 1</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center -mt-12">
          <p className="text-base text-gray-400">
            All rights reserved by @ syadur_2022
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
