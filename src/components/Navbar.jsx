import React from "react";
import firebase from "../assets/logos_firebase.svg";
import { Search } from "lucide-react";
import { CirclePlus } from "lucide-react";
const Navbar = ({openModel,open,isUpdate,setIsUpdate }) => {
  return (
    <div className="p-5 flex flex-col gap-4 ">
      <div className="bg-[#ffffff] h-15 rounded-xl flex justify-center items-center gap-3 p-2 ">
        <img src={firebase} alt="" />
        <h1 className="text-1xl font-bold">Firebase Contact App</h1>
      </div>

      <div className=" flex gap-1 justify-between">
        <div className=" w-full max-w-74  cursor-pointer">
          <input
            type="text" placeholder="Search Contact"
            className="  pl-6 pb-1 justify-center items-center px-4 cursor-pointer  placeholder:text-amber-50/70 flex bg-transparent text-white border-2 focus:outline-none rounded grow border-white w-full "
          />
          <Search className="text-amber-50 absolute top-23.5 w-7 h-7 px-2" />
        </div>

        <div className=" flex justify-end cursor-pointer">
          <CirclePlus onClick={()=>{
            console.log("isUpdate:",isUpdate)
            setIsUpdate(false)
            openModel()
            
          }} className=" h-8 w-8 text-amber-50 rounded-full   " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
