import React from "react";

const Offerings = () => {
  return (
    <div className="w-full pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
      <h2 className="text-xl font-serif font-bold text-green-500 text-left left-2">
        Our Services
      </h2>
      <h2 className="text-xl font-serif font-bold text-green-500 text-left left-2">
        Explore our offerings
      </h2>
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
              <img
                src="../images/8822eb92-77fa-11ef-9cf8-0242ac110002-jpg-regular_image.jpeg"
                alt="image"
                className="w-full"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="
                                font-semibold
                                text-dark text-xl
                                sm:text-[22px]
                                md:text-xl
                                lg:text-[22px]
                                xl:text-xl
                                2xl:text-[22px]
                                mb-4
                                block
                                hover:text-primary
                                "
                  >
                    Expert physiotherapy
                  </a>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                  Experience personalized physiotherapy sessions with skilled
                  professionals.
                </p>
                <a
                  href="javascript:void(0)"
                  className="
                             inline-block
                             py-2
                             px-7
                             border border-[#E5E7EB]
                             rounded-full
                             text-base text-body-color
                             font-medium
                             hover:border-primary hover:bg-primary hover:text-white
                             transition
                             "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
              <img
                src="../images/88bdebec-77fa-11ef-9cf8-0242ac110002-jpg-regular_image.jpeg"
                alt="image"
                className="w-full"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="
                                font-semibold
                                text-dark text-xl
                                sm:text-[22px]
                                md:text-xl
                                lg:text-[22px]
                                xl:text-xl
                                2xl:text-[22px]
                                mb-4
                                block
                                hover:text-primary
                                "
                  >
                    Doctor appointments
                  </a>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                  Easily schedule appointments with qualified doctors at your
                  convenience.
                </p>
                <a
                  href="javascript:void(0)"
                  className="
                             inline-block
                             py-2
                             px-7
                             border border-[#E5E7EB]
                             rounded-full
                             text-base text-body-color
                             font-medium
                             hover:border-primary hover:bg-primary hover:text-white
                             transition
                             "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
              <img
                src="../images/88026ba6-77fa-11ef-9cf8-0242ac110002-jpg-regular_image.jpeg"
                alt="image"
                className="w-full"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="
                                font-semibold
                                text-dark text-xl
                                sm:text-[22px]
                                md:text-xl
                                lg:text-[22px]
                                xl:text-xl
                                2xl:text-[22px]
                                mb-4
                                block
                                hover:text-primary
                                "
                  >
                    Holistic health approach
                  </a>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                  Integrate traditional and modern healthcare for optimal
                  wellness.
                </p>
                <a
                  href="javascript:void(0)"
                  className="
                             inline-block
                             py-2
                             px-7
                             border border-[#E5E7EB]
                             rounded-full
                             text-base text-body-color
                             font-medium
                             hover:border-primary hover:bg-primary hover:text-white
                             transition
                             "
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
