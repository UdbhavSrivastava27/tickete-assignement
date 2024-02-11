import React from "react";
import {BiWorld } from "react-icons/bi";
import { CiCircleInfo, CiCreditCard1 } from "react-icons/ci";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { RiRadioButtonFill } from "react-icons/ri";


const LeftPoertion = () => {
  return (
    <div className=" p-1  md:mr-6">
      <div className=" ">
        <div className=" rounded-xl border-2 p-5 flex flex-row justify-between ">
          <div>
            <h1 className=" font-semibold  ">Free cancellation</h1>
            <p className=" text-sm text-gray-500">
              Tickete’s can be cancelled by 13th December, 2022.
            </p>
          </div>
          <IoIosInformationCircle className=" text-xl text-slate-500" />
        </div>

        <hr class=" my-8 border-t-2 border-b border-gray-300 md:hidden"></hr>

        <div>
          <div className=" m-2 mt-16 md:mt-8">
            <h1 className=" font-bold text-2xl">Enter your details</h1>
            <p className=" mt-3 text-sm font-semibold text-slate-600">
              We'll be sending your tickets to the details below. Booking for a
              friend? Add their details.
            </p>
          </div>

          <div className=" border-2 rounded-xl border-gray-200 flex fitems-center p-4 mt-6">
            <h1 className=" text-gray-400">Full Name </h1>
            <p className=" text-xl text-red-800 px-1">*</p>
          </div>

          <div className=" flex flex-col md:flex-row items-center justify-between md:space-x-4">
            <div className=" border-2 rounded-2xl border-gray-200 flex  items-center p-4 mt-5 justify-between  w-full md:w-1/2 ">
              <div className=" flex items-center">
                <BiWorld className=" text-gray-500 text-lg mx-2" />
                <h1 className=" text-gray-400"> Country code </h1>
                <p className=" text-xl text-red-800 px-1">*</p>
              </div>
              <FaAngleDown />
            </div>

            <div className=" border-2 rounded-2xl border-gray-200 flex fitems-center p-4 mt-5 w-full md:w-1/2">
              <h1 className=" text-gray-400">Phone Numbber</h1>
              <p className=" text-xl text-red-800 px-1">*</p>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row items-center justify-between md:space-x-4 ">
            <div className=" border-2 rounded-xl border-gray-00 flex fitems-center p-4 mt-5 w-full md:w-1/2">
              <h1 className=" text-gray-400">Email</h1>
              <p className=" text-xl text-red-800 px-1">*</p>
            </div>

            <div className=" border-2 rounded-xl border-gray-200 flex fitems-center mt-5 p-4 w-full md:w-1/2">
              <h1 className=" text-gray-400 bg-white">Confirm email</h1>
              <p className=" text-xl text-red-800 px-1">*</p>
            </div>
          </div>

          <hr class=" my-8  border-b border-gray-300"></hr>

          <h1 className=" font-semibold text-2xl mt-14">
            Additional Information
          </h1>
          <p className="  p-1 text-sm text-gray-500">
            We need a few more details to complete your reservation.
          </p>
             
          <div className=" flex flex-col md:flex-row items-center justify-between md:space-x-4 ">
          <div className=" border-2 rounded-xl border-gray-200 flex fitems-center mt-4 p-4 w-full md:w-1/2">
            <h1 className=" text-gray-400">Input lable </h1>
            <p className=" text-xl text-red-800 px-1">*</p>
          </div>

          <div className=" border-2 rounded-xl border-gray-200 flex  mt-4 p-4 justify-between items-center w-full md:w-1/2">
            <div className=" flex flex-row" >
              {" "}
              <h1 className=" text-gray-400">Select </h1>
              <p className=" text-xl text-red-800 px-1">*</p>
            </div>

            <FaAngleDown className="text-gray-500 text-xl"/>
          </div>
          </div>


          <div className=" border-2 rounded-xl border-gray-200 flex  mt-4 p-4 justify-between items-center">
            <div className=" flex flex-row" >
              {" "}
              <h1 className=" text-gray-400">Multiselect </h1>
              <p className=" text-xl text-red-800 px-1">*</p>
            </div>

            <FaAngleDown className=" text-gray-500 text-xl"/>
          </div>

          <h1 className=" font-semibold text-2xl mt-10">
            Select your mode of payment
          </h1>
          <p className="  py-4 text-gray-500">
            Payments with Tickete are secure and encrypted.
          </p>

          <div className=" border-2 border-gray-700 rounded-lg p-4">
            

            <div className=" flex flex-row items-center justify-between">
            <div className=" flex flex-row items-center">
              <CiCreditCard1 className="m-2 text-2xl  border w-10 rounded-md" />
              <h1>Credit & debit card</h1>
            </div>
            
            <RiRadioButtonFill size={30}/>

            </div>

            <div className=" m-2 text-xl flex flex-row items-center">
              <FaCcVisa className="text-blue-700 m-2" />
              <FaCcMastercard className=" text-orange-600" />
            </div>


            <div className=" flex flex-col md:flex-row items-center justify-between md:space-x-8 ">

            <div className=" border-2 rounded-xl border-gray-200 flex fitems-center mt-4 p-4 w-full md:w-1/2">
              <h1 className=" text-gray-400">Name on Card </h1>
              <p className=" text-xl text-red-800 px-1">*</p>
            </div>

            <div className=" border-2 rounded-xl border-gray-200 flex fitems-center mt-4 p-4 items-center w-full md:w-1/2">
              <CiCreditCard1 className=" m-2 text-xl" />
              <h1 className=" text-gray-400">Full Name </h1>
              <p className=" text-xl text-red-800 px-1">*</p>
            </div>
            </div>



       <div className="  flex flex-col md:flex-row items-center justify-between md:space-x-8 ">
            <div className=" border-2 rounded-xl border-gray-200 flex fitems-center mt-4 p-4 w-full md:w-1/2">
              <h1 className=" text-gray-400">Expiry date</h1>
              <p className=" text-xl text-red-800 px-1">*</p>
            </div>

            <div className=" border-2 rounded-xl border-gray-200 flex fitems-center mt-4 p-4  w-full md:w-1/2" >
              <h1 className=" text-gray-400">CVV/CVC </h1>
              <p className=" text-xl text-red-800 px-1">*</p>
            </div>

            </div>

           
              <div className=" mt-8 w-fit bg-[#299764]  rounded-2xl items-center ">
                <p className=" items-center p-1 font-semibold ml-1 text-slate-100 text-sm">
                🐖 You save (price)
                </p>
            </div>

            <div className=" flex flex-row">
              <h1 className=" text-xl font-bold pt-4">Total payable:</h1>
              <h1 className=" text-lg font-bold pt-4">$XXX</h1>
            </div>
        
  
              
            <div>
              <div className=" flex items-center py-4">
                <p className=" text-gray-500 underline font-semibold ">
                  You card will be charged in AED
                </p>
                <CiCircleInfo className=" mx-2" />
              </div>
            </div>

            <div>
              <p className=" text-sm text-gray-500 font-medium  mt-4">
                By clicking “confirm & pay”, you agree to
                <span className=" text-blue-600 underline pl-1">
                  Tickete’s general terms
                </span>{" "}
                and{" "}
                <span className=" text-blue-600 underline">
                  conditions and cancellation policy.
                </span>
              </p>
            </div>

            <div>
              <div className=" bg-black rounded-xl flex flex-row items-center justify-center p-2  mt-8 m-4 md:w-fit px-6">
                <MdLock className=" text-white" />
                <h1 className=" text-white p-2 font-semibold text-lg">
                  Confirm & pay
                </h1>
              </div>
            </div>
          </div>

          <div className=" border-2 border-gray-200 mt-5 p-6 rounded-xl flex flow-row items-center justify-between bg-gray-50">
            <div className=" flex flex-row items-center justify-center">
              <FaGooglePay className=" text-4xl text-gray-500" />
              <p className=" mx-2 text-gray-400 font-semibold">Coming soon</p>
            </div>
            <FaCircle className=" text-gray-400 text-xl" />
          </div>

          <div className=" border-2 border-gray-200 my-5 p-6 rounded-xl flex flow-row items-center justify-between bg-gray-50">
            <div className=" flex flex-row items-center justify-center">
              <FaGooglePay className=" text-4xl text-gray-500" />
              <p className=" mx-2 text-gray-400 font-semibold">Coming soon</p>
            </div>
            <FaCircle className=" text-gray-400 text-xl" />
          </div>

          <hr class=" border-b border-gray-300" />

          <div className=" mt-4">
            <div className=" w-fit bg-[#B4DFC4] opacity-90  mt-16  shadow-sm  rounded-2xl ">
              <p className=" items-center p-1 font-semibold ml-1 text-[#299764] text-xs md:hidden">
              🐖 You saved (price)
              </p>
            </div>
          </div>

          <div className=" flex flex-row">
            <h1 className=" text-2xl font-bold pt-4">Total payable:</h1>
            <h1 className=" text-2xl font-bold pt-4"> $XXX</h1>
          </div>

          <div className=" flex flex-row border-2 p-4 rounded-xl mt-6 ">
            <div>
              <IoIosInformationCircle className="text-xl" />
            </div>

            <div>
              <h1 className=" font-semibold px-2">
                You will be charged in AED
              </h1>
              <p className=" text-sm p-2 text-gray-500">
                The price shown here is in US Dollar (USD) as per the current
                conversion rate. You will be charged in United Arab Emirates
                Dirham (AED).
              </p>
            </div>
          </div>

          <hr class="border-t-2 border-b border-gray-300 my-6" />
        </div>
      </div>
    </div>
  );
};

export default LeftPoertion;
