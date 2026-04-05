import React, { useEffect, useState } from "react";
import { colors } from "./constants/color";
import Navbar from "./components/Navbar";
import { getDoc, getDocs, collection } from "firebase/firestore";

import { db } from "./config/firbase";
import ContactCard from "./components/contactCard";
import Model from "./components/Model";
import { Heading2 } from "lucide-react";
import AddDeleteContact from "./components/AddDeleteContact";
import useDisclouse from "./hooks/useDisclouse";
const App = () => {
  const [contact, setContacts] = useState([]);
 
  const [loading, setLoading] = useState(true);
  const [interet, setInternet] = useState(true);
  const {isOpen,openModel,closeModel,isUpdate,setIsUpdate,selectedContact,setSelectedContact} = useDisclouse()


  

  useEffect(() => {
    const getContacts = async () => {
      try {
        setLoading(true);
        setInternet(false); // reset error

        const contactRef = collection(db, "firbase-contact");
        const contactSnapshot = await getDocs(contactRef);

        const contactLists = contactSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setContacts(contactLists);
      } catch (error) {
        console.log(error);
        setInternet(true); // error aaya
      } finally {
        setLoading(false); // loading band
      }
    };

    getContacts();
  }, []);

  useEffect(() => {
    console.log("contact is:" , contact);
    console.log("hello ");
  }, [contact]);
    

  return (
    <div className="max-w-92.5 mx-auto  ">
      <Navbar openModel={openModel} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {loading ? (
            <div className="text-center text-white text-xl">LOADING...</div>
          ) : interet ? (
            <div className="text-center text-red-500 text-xl">
              Check your internet...
            </div>
          ) : contact.length === 0 ? (
            <div className="text-center text-white">No Contacts Found</div>
          ) : (
            contact.map((item) => <ContactCard key={item.id} item={item} openModel={openModel} closeModel={closeModel} isOpen={isOpen} setIsUpdate={setIsUpdate} isUpdate={isUpdate} setSelectedContact={setSelectedContact} />)
          )}
        </div>
      </div>
      <AddDeleteContact openModel={openModel} closeModel = {closeModel} isOpen={isOpen} isUpdate={isUpdate} contact={contact} selectedContact={selectedContact}/>
    </div>
  );
};

export default App;
