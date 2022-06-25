import React from "react";

const About = () => {
  return (
    <div className="mx-20">
      <div className="text-center">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          className="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
        <p className="text-gray-500">Web designer</p>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Card title
              </h5>
              <p className="text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Card title
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
