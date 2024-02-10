import React from "react";
import Gallery from "../Assest/Gallery.png";
import { IoStarHalfSharp } from "react-icons/io5";
import { FaAngleRight, FaTicket } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { MdAirplaneTicket } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { MdLock } from "react-icons/md";



const RightPortion = () => {
  return (
    <div className="border-2 md:w-3/12 pb-6 h-1/2 rounded-3xl flex flex-col justify-around my-6 md:-mt-20">
      <div className=" flex flex-col px-4 justify-center">
        <img src={Gallery} className=" w-auto h-auto mt-4 rounded-2xl" />

        <div className=" flex flex-row p-3 items-center justify-start  ">
          <IoStarHalfSharp className=" text-orange-600" />
          <p className=" font-semibold">4.9</p>
          <p className=" pr-2  text-slate-500">(4.5k)</p>
          <FaAngleLeft className=" p-[2px] mt-1 text-sm opacity-50" />
          <p className=" text-sm text-slate-500">category</p>
          <FaAngleRight className="text-sm opacity-50 p-[2px] mt-1" />
        </div>

        <p className=" font-semibold">
          Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef
        </p>

        <div className=" mt-8 flex flex-row items-center justify-start">
          <MdAirplaneTicket size={30} />
          <h1 className=" mx-4 font-semibold">Ticket type - variant</h1>
        </div>

        <div className="mt-4 flex flex-row items-center justify-start">
          <FaCalendarDay size={30} className="p-1" />
          <h1 className=" mx-4 font-semibold">Day, Month, Date</h1>
        </div>
        <p className="mt-2 flex items-center justify-start mx-12 text-gray-600 text-sm">
          {" "}
          Duration: (duration)
        </p>
      </div>

      <div className="mt-1 flex flex-row font-semibold  items-center justify-start">
        <BsClockHistory size={30} className=" p-1 ml-5" />
        <p className=" p-2">Time</p>
      </div>
      <p className="mt-[1px] flex items-center justify-start mx-16 text-sm text-gray-600">
        {" "}
        Operating hours:____ to____
      </p>

      <div className="mt-4 flex flex-row font-semibold  items-center justify-start">
        <FaUserFriends size={30} className="p-1 ml-5" />
        <p className=" p-2 font-semibold">5 guests</p>
      </div>

      <hr class="border-b  mt-4 border-dashed  border-[3px] border-gray-300"/>

 
      <div className=" mb-1 flex flex-row font-semibold  items-center justify-between">
        <p className="p-4 mx-4 text-gray-500 underline">View Payment summary</p>
        <FaPlus  className=" text-gray-500 mr-2"/>
      </div>
      <hr className="border-b border-gray-400"></hr>


      <div className="flex flex-row justify-between items-center">
      <h1 className=" text-2xl font-bold p-4">Total payable</h1>
      <h1 className=" text-lg font-bold p-4">$XXX</h1>
      </div>


<div className=" m-2 w-fit ">
     <div className=" bg-[#E9F9EE]  rounded-2xl -mt-4 mb-4  flex items-center ">
      <p className=" items-center p-1  font-semibold ml-2 text-[#299764] flex w-fit">🐖 You saved (price)</p>
      </ div>
      </div>

      <div className=" flex items-center p-4">
        <p className=" text-gray-500 underline font-semibold ">You will be charged in AED</p>
        <CiCircleInfo className=" mx-2"/>
      </div>


      <div className=" hidden md:block">
 <p className=" text-sm text-gray-500 font-medium m-4 mt-8">By clicking “confirm & pay”, you agree to<span className=" text-blue-600 underline pl-1">Tickete’s general terms</span> and <span className=" text-blue-600 underline">conditions and cancellation policy.</span></p>
      </div>


<div className=" hidden md:flex bg-black rounded-3xl  flex-row items-center justify-center p-3  mt-8 mx-4 ">
    <MdLock className=" text-white"/>
    <h1 className=" text-white p-2 font-semibold text-lg">Confirm & pay</h1>
    </div>
    </div>
  );
};

export default RightPortion;
