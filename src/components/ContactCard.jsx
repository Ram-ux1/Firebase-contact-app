import React, { useState } from 'react'
import { CircleUser, Trash2 } from "lucide-react";
import { SquarePen } from 'lucide-react';
import { db } from '../config/firbase';
import { deleteDoc, doc } from 'firebase/firestore';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';



const ContactCard = ({item,openModel,isOpen,setIsUpdate,isUpdate,setSelectedContact}) => {
  


  const deleteContact= async (id)=>{
    try { 
      await deleteDoc(doc(db,"firbase-contact",id))
      toast.success("Contact deleted successfully ")
    } catch (error) {
      console.log(error)
    }
  }

  const updateContact = (id)=>{
    console.log(item.id)
  }
  return (
    <div >
      
          <div className="px-5">
            <div key={item.id} className="bg-[#FFEAAE] flex items-center justify-between gap-2 px-3 py-2 rounded-xl">
              
                <div  >
                  <CircleUser className=" h-9 w-9 cursor-pointer text-orange-400" />
                </div>
                <div className=" py-1" onClick={updateContact()}>
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <h1>{item.email}</h1>
                </div>

                <div className="flex gap-2 cursor-pointer ">
                  <SquarePen className="font-bold cursor-pointer" 
                  onClick={()=>{
                    setIsUpdate(true)
                    openModel()
                     console.log("isOPen: ", isOpen)
                     console.log("is update: ",isUpdate)
                     setSelectedContact(item)
                  }}
                  />

                
                  <Trash2 className="font-bold text-red-500"
                  onClick={()=>{
                    deleteContact(item.id)
                    console.log("trash clikced",item)
                    console.log

                  }} />
                </div>

              
            </div>
          </div>
    </div>
  )
}

export default ContactCard
