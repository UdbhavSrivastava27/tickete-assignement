import React from "react";
import logo from "../Assest/Logo Footer.png";

const LowerFooter = () => {
  return (
    <div className=" bg-black h-80 mt-20"
     >

        <div className=" p-8 ">
            
                  <div className="  p-10 md:p-20">
        <img src={logo} />
      </div>

      <hr class="border-t-1 border-b border-gray-600  "/>
    </div>
    </div>

  );
};

export default LowerFooter;
