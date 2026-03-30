import React, { useEffect, useState } from "react";
import { colors } from "./constants/color";
import Navbar from "./components/Navbar";
import { getDoc, getDocs ,collection} from "firebase/firestore";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db,"contacts");
        const contactSnapshot = await getDocs(contactRef)
        const contactLists = contactSnapshot.docs.map((doc)=>{
          return{
            id: doc.id,
            ...doc.data()
          }
        })
        setContacts(contactLists)
        
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <>
      <div className="max-w-92.5 mx-auto ">
        <Navbar />
      </div>
    </>
  );
};

export default App;
