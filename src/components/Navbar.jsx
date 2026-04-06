import React from "react";
import firebase from "../assets/logos_firebase.svg";
import { Search, CirclePlus } from "lucide-react";

const Navbar = ({ openModel, isUpdate, setIsUpdate, contactFilter }) => {
  return (
    <div className="p-5 flex flex-col gap-4">
      
      {/* Header */}
      <div className="bg-[#ffffff] h-15 rounded-xl flex justify-center items-center gap-3 p-2">
        <img src={firebase} alt="" />
        <h1 className="text-1xl font-bold">Firebase Contact App</h1>
      </div>

      {/* Search + Add */}
      <div className="flex gap-2 items-center">

        {/* Search Input */}
        <div className="relative w-full max-w-74">
          <input
            type="text"
            placeholder="Search Contact"
            onChange={contactFilter}   // ✅ IMPORTANT FIX
            className="pl-10 py-1 px-4 bg-transparent text-white border-2 focus:outline-none rounded border-white w-full placeholder:text-amber-50/70"
          />

          <Search className="text-amber-50 absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5" />
        </div>

        {/* Add Button */}
        <CirclePlus
          onClick={() => {
            setIsUpdate(false);
            openModel();
          }}
          className="h-8 w-8 text-amber-50 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;