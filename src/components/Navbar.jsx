import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#E38B29] w-screen h-[50px] flex justify-between items-center fixed top-0 z-20">
        <a href="/">
          <div className="">
            <h1 className="text-[#FDEEDC] text-3xl ml-3 cursor-pointer">
              Recipe Food
            </h1>
          </div>
        </a>

        <div className="">
          {/* <h1 className="text-[#FDEEDC] cursor-pointer text-xl mr-3 underline">
            API
          </h1> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
