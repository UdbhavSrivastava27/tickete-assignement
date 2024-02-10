import React from "react";
import RightPortion from "./RightPortion";
import LeftPoertion from "./LeftPoertion";
import Footer from "./Footer";
import LowerFooter from "./LowerFooter";

const Body = () => {
  return (
    <div className=" mt-16 ">
      <h1 className=" text-5xl font-serif md:font-semibold   md:px-28 px-4 -mb-6 md:mb-10 ">Confirm & Pay</h1>
      <div className=" flex flex-col-reverse md:flex-row  md:px-28 py-8 px-8 ">
        <LeftPoertion  />
        <RightPortion />
      
      </div>

      <div className="  md:px-24">
      <Footer/>
     
      </div>

      <LowerFooter/>
    </div>
  );
};

export default Body;
