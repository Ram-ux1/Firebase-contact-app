import React from 'react'
import { useState } from "react";

const useDisclouse = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isUpdate, setIsUpdate] = useState(true)
   const [selectedContact, setSelectedContact] = useState(null);
   function openModel() {
    setIsOpen(true);
    console.log(isOpen);
    console.log("openModel Clicked");
  }
  function closeModel(){
    setIsOpen(false)
    console.log("model closed")
  }

  return {isOpen,openModel,closeModel,isUpdate,setIsUpdate,selectedContact,setSelectedContact}
}

export default useDisclouse
