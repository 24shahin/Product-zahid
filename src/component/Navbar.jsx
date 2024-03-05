import React from "react";
import Flex from "./Layout/Flex";
import { IoSearch } from "react-icons/io5";
import Container from "./Layout/Container";
import { MdCardGiftcard, MdFlashOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className="bg-[#081621] py-[15px]">
        <Container>
          <Flex style={"items-center"}>
            <div className="w-[13%]">
              <img src="../src/assets/logo.png" alt="" />
            </div>
            <div className="w-[45%] relative">
              <input
                type="text"
                className="w-full rounded-md py-3 px-4"
                placeholder="Search"
              />
              <IoSearch className="absolute top-[40%] right-7" />
            </div>
            <div className="w-[42%] pl-5 flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <MdCardGiftcard className="text-[#ef4a23] text-2xl" />
                <div className="">
                  <h2 className="text-[15px] font-normal text-white">Offers</h2>
                  <p className="text-[13px] font-normal text-[#ffffff80]">
                    Latest Offers
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <MdFlashOn className="text-[#ef4a23] text-2xl" />
                <div className="">
                  <h2 className="text-[15px] font-normal text-white">
                    17th Deals
                  </h2>
                  <p className="text-[13px] font-normal text-[#ffffff80]">
                    Special Deals
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <FaUser className="text-[#ef4a23] text-2xl" />
                <div className="">
                  <h2 className="text-[15px] font-normal text-white">
                    Account
                  </h2>
                  <p className="text-[13px] font-normal text-[#ffffff80]">
                    Register or Login
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-semibold text-white px-4 py-3 bg-[#00237e] rounded"
              >
                PC Builder
              </a>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="bg-white shadow-[0_2px_2px_#0000001a] mb-3">
        <Container>
          <ul className="flex">
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer text-[#222]">
              Desktop
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Laptop
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Component
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Monitor
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              UPS
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Phone
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Tablet
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Office Equipment
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Camera
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Security
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Networking
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Software
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              {" "}
              Server & Storage
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Accessories
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Gadget
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Gaming
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              TV
            </li>
            <li className="text-sm font-semibold px-[7px] block py-3 cursor-pointer">
              Appliance
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
