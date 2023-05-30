import React from "react";

const Sorting = ({ icon, title }) => {
  return (
    <div
      className="
      flex justify-center items-center rounded w-auto 
      text-[13px] sm:text-[16px] h-16 sm:text-[14px]
      text-black bg-[transparent] duration-200 ease-in-out
      hover:bg-white hover:text-[#329a9a] flex flex-col"
    >
      <h1 className="text-[50]">{icon}</h1>
      <span>{title}</span>
    </div>
  );
};

export default Sorting;
