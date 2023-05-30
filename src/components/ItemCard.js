import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const ItemCard = ({ id, title, image, price, available, city, country, rating }) => {
  return (
    <Link to={`/listing/${id}`}>
      <div className="">
        <div className="relative">
          <div className="gradient absolute h-full w-full rounded-b-[1.25rem]"></div>
          <div className="flex">
            {/* Bg/Img */}
            <img
              className="object-cover rounded-[1.25rem] sm:h-[12rem] w-full"
              src={image}
              alt={title}
            />
            {/* Title */}
            <div className="flex absolute items-center gap-2 text-white font-bold bottom-1 left-4 text-[20px]">
              {title}
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="flex justify-between items-start pt-3">
          {/* Left */}
          <div className="">
            <span className="max-w-[20srem] font-semibold text-gray-600 text-[14px]">
              {city}, {country}
            </span>
            <span className="max-w-[20rem] text-gray-600 text-[14px] -mt-1">
              {available ? `Available` : `In use`}
            </span>
            <span className="max-w-[20srem] font-semibold text-[18px]">${price}</span>
          </div>
          {/* Right */}
          <div className="flex items-center space-x-1">
            <BsStarFill />
            <span className="text-[14px]">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
