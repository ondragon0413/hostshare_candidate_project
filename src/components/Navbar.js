import React, { useState } from 'react';
import logo from "../assets/hostshare-green.png";
import { TfiWorld } from "react-icons/tfi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Data from '../listings.json';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [guests, setGuests] = useState(0);
  const [location, setLocation] = useState('');
  let converted_location = location.replace(/\s+/g, '_');
  let locations = [];
  Data.data.map(item => {
    return locations.push(item.info.location.city)
  })
  const cities = [...new Set(locations)];
  const search_result = (converted_location, startDate, guests) => {
    if (converted_location === '') {
      return alert('Please select a city!');
    }
    window.location.href = `/search_result/${converted_location}/${startDate}/${guests}`
  }
  console.log(startDate)
  return (
    <div className="border-b sticky top-0 bg-white z-50">
      <div className="flex sm:mx-6 md:mx-8 lg:mx-10 items-center justify-between">
        {/* Left */}
        <div className="flex h-20 mx-12">
          <Link to='/'><img src={logo} alt="logo" className="object-cover-my-10 h-12 mt-2" /></Link>
        </div>
        {/* Middle */}
        <div className="hidden lg:flex items-center justify-center relative border shadow-md shadow-gray-300 rounded-full">
          {/* <input
            type="search"
            placeholder=""
            className="py-2.5 w-[18rem] outline-0 rounded-full"
          /> */}
          <div className="flex pr-4 pt-1 pb-1 justify-between w-full font-semibold text-gray-600/75">
            <select className="border-none w-full ml-10 mr-1" onChange={event => setLocation(event.target.value)} placeholder='Location'>
              <option key='sd'>Select Location...</option>
              {
                cities.map((item, index) => <option key={index}>{item}</option>)
              }
            </select>
            <DatePicker dateFormat="yyyy-MM-dd" selected={startDate} className='w-full border-none' onChange={(date) => setStartDate(date)} />
            <input type='number' className="w-16 border-none ml-1" value={guests} onChange={event => setGuests(event.target.value)} />
          </div>
          <div className="flex bg-[#329a9a] rounded-full p-2 mr-6 hover:bg-[#4fd1c5] text-white font-bold">
            <button onClick={() => search_result(converted_location, startDate, guests)}><FiSearch className="text-white" /><span className='hidden'>Search</span></button>
          </div>
        </div>
        {/* Right */}
        <div className="flex pr-3 items-center font-semibold text-gray-600">
          <span className="text-[16px]">House rental</span>
          <div className="flex items-center mx-8 gap-1">
            <TfiWorld />
            <div className="">EN</div>
          </div>
          <div
            className="flex bg-[#329a9a] text-white font-semibold 
                        items-center px-3 py-2 gap-3 border rounded-full
                        shadow-md shadow-gray-300 hover:text-black hover:bg-[#ffffff] hover:outline-none duration-200 ease-out
                        "
          >
            <FiMenu className="text-[18px]" />
            {/* <p>Sign In</p> */}
            <AiOutlineUser className="text-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
