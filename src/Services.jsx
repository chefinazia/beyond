import React from "react";

const Services = () => {
  return (
    <>
      <div className="relative justify-items-start ">
        <img
          src="../images/39580282-3cb4-11e8-bbb9-0242ac11000f-jpg-hero_image.jpeg"
          alt="img"
        />
        <div className="w-full absolute top-0 left-2 text-center mt-10">
          <h2 className="text-4xl font-serif font-bold text-gray-50 text-left left-2">
            Quality Health Care
          </h2>
          <h2 className="text-4xl font-serif py-4 text-gray-50 text-left">
            Book an appointment with expert doctors
          </h2>
          <a className="w-[150px] absolute left-8 px-2.5 py-2 mt-2 bg-green-800 text-left align-left text-white content-start font-semibold rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-2 w-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ></svg>
            <span class="ml-1">Book Services</span>
          </a>
      </div>
      </div>
    </>
  );
};

export default Services;
