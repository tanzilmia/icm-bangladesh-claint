import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="p-6 w-11/12 md:w-[1240px] rounded-[20px] my-10 mx-auto lg:w-[1240px] py-12 bg-violet-400 text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className='className="sm:hidden"' /> 50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span className=" text-2xl text-[#fff]">Best Re-Selling Platform In Bangladesh </span>
              <span className="font-bold text-lg"></span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
