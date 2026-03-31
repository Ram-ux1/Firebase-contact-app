import React from 'react'
import { CircleUser, Trash2 } from "lucide-react";
import { SquarePen } from 'lucide-react';
import { db } from '../config/firbase';



const ContactCard = ({item}) => {
  return (
    <div>
      
          <div className="px-5">
            <div key={item.id} className="bg-[#FFEAAE] flex items-center justify-between gap-2 px-3 py-2 rounded-xl">
              
                <div  >
                  <CircleUser className=" h-9 w-9 cursor-pointer text-orange-400" />
                </div>
                <div className=" py-1">
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <h1>{item.email}</h1>
                </div>

                <div className="flex gap-2 cursor-pointer ">
                  <SquarePen className="font-bold" />
                
                  <Trash2 className="font-bold text-red-500" />
                </div>

              
            </div>
          </div>
    </div>
  )
}

export default ContactCard
