import { X } from "lucide-react";
import React from "react";
import AddDeleteContact from "./AddDeleteContact";

const Model = ({ isOpen, closeModel, children, isUpdate }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          {/* Backdrop */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-40"></div>

          {/* Modal Box */}
          <div className="h-[200px] w-[300px]  bg-amber-50 p-4 z-50 rounded-lg">
            <div className="flex justify-end">
              <X onClick={closeModel} className="cursor-pointer" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
