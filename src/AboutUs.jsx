import React from "react";

const AboutUs = () => {
  return (<div className="flex justify-evenly">
    <div className="flex">
      <img
        src="../images/88026ba6-77fa-11ef-9cf8-0242ac110002-jpg-regular_image.jpeg"
        alt="img"
        className="h-[600px] w-[500px] pt-20 isolate"
      /></div>
      <div className="isolate px-20 pt-10 mt-10 py-6">
          <h1 className="text-l font-mono text-green-500">
            ABOUT US
          </h1>
          <h2 className="text-xl font-serif py-4 text-green-500">
          Your partner in health
          </h2>
          <h1 className="w-80 whitespace-break-spaces text-md font-serif py-4 text-gray-500">Beyond HealthCare LLC, located in New Delhi, is committed to providing exceptional healthcare services. We connect you with skilled doctors and facilitate easy appointment bookings. Our focus is on ensuring your health and well-being through personalized care and expert guidance.</h1>
    </div>
    </div>
  );
};

export default AboutUs;
