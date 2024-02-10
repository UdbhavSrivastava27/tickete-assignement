import React from "react";
import FootImg from '../Assest/FooterImg.png'
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



const Footer = () => {
  return (
    <div>
      <div className=" pl-8 md:mr-32">

        {/* left side */}
        <div>
          <h1 className=" font-bold text-2xl">Frequently asked questions</h1>
          <h2 className=" mt-4 text-sm text-gray-600">Here are some of our most asked questions. </h2>
         
        </div>

  

       <div className=" flex flex-col-reverse md:flex-row justify-start mt-6">

        <div className=" w-full  md:m-1 ">
        <img src={FootImg} className=" pt-14 pr-10  " />
</div>


        <div className="  mt-0  w-11/12 ">
       
        <div className=" border-2 rounded-xl border-gray-200 flex  mt-4 p-4 items-center" >
            < FaPlus className=" m-2 text-xl"/>
              <h1 className=" text-black">What should I do on my first trip to Rome?</h1>
              <p className=" text-xl text-red-800">*</p>

        </div>
        
               
        <div className=" border-2 rounded-xl border-gray-200 mt-4  pb-4">
            <div className="  flex p-4 items-center">

           
            < RxCross2 className=" m-2  text-xl"/>

           
              <h1 className=" text-black ">What are some hidden gems to see in Rome?</h1>

              </div>


              <div className=" ml-12 ">
                <p className=" text-gray-600 text-sm p-4">Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.</p>
              </div>



        </div>



        <div className=" border-2 rounded-xl border-gray-200 flex fitems-center mt-4 p-4 items-center">
            < FaPlus className=" m-2 text-xl"/>
              <h1 className=" text-black">How much time should I spend in Rome?</h1>
              <p className=" text-xl text-red-800">*</p>

        </div>



        <div className=" border-2 rounded-xl border-gray-200 flex fitems-center mt-4 p-4 items-center">
            < FaPlus className=" m-2 text-xl"/>
              <h1 className=" text-black">What food is Rome known for?</h1>
              <p className=" text-xl text-red-800">*</p>

        </div>




        <div className=" border-2 rounded-xl border-gray-200 flex fitems-center mt-4 p-4 items-center">
            < FaPlus className=" m-2 text-xl"/>
              <h1 className=" text-black">What is the best way to get around Rome?</h1>
              <p className=" text-xl text-red-800">*</p>

        </div>

        </div>

        </div>


        <hr class="border-t-2 border-b border-gray-300 mx-2 mt-4 md:mt-16"/>
        

        </div>
      </div>
    
  );
};

export default Footer;
