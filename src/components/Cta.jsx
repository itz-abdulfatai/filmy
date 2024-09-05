import React from "react";
import Button from "./Button";

function Cta() {
  return (
    <div className=" w-auto h-[280px] p-10 flex flex-col md:flex-row items-center justify-between  rounded-xl relative cta_bg mx-5 md:mx-10 overflow-hidden border border-secondary m-5 md:m-10 ">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary z-[5] bg-gradient-to-b md:bg-gradient-to-r from-black  to-[#e5000025] bg-opacity-70"></div>

      <div className=" flex flex-col items-center md:items-start z-10 text-center md:text-left">
        <div className=" text-3xl font-bold mb-3">
          Start your free trial today!
        </div>
        <p className=" text-xs text-ash ">
          This is a clear concise call to action that compell users to signup
          for a free trial of Filmy
        </p>
      </div>
      <div className="z-10">
        <Button text="start a free trial " bg="accent" />
      </div>
    </div>
  );
}


export default Cta;
