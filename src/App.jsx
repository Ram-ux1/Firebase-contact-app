import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firbase";
import ContactCard from "./components/contactCard";
import AddDeleteContact from "./components/AddDeleteContact";
import useDisclouse from "./hooks/useDisclouse";

const App = () => {
  const [contact, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [interet, setInternet] = useState(false);

  const {
    isOpen,
    openModel,
    closeModel,
    isUpdate,
    setIsUpdate,
    selectedContact,
    setSelectedContact,
  } = useDisclouse();

  //  SEARCH INPUT
  const contactFilter = (e) => {
    console.log("typing:", e.target.value); //  add this
    setSearchTerm(e.target.value.toLowerCase());
  };

  //  FIREBASE (ONLY ONCE)
  useEffect(() => {
    setLoading(true);
    setInternet(false);

    const contactRef = collection(db, "firbase-contact");

    const unsubscribe = onSnapshot(
      contactRef,
      (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAllContacts(contactLists); // only store here
        setLoading(false);
        closeModel();
      },
      (error) => {
        console.log(error);
        setInternet(true);
        setLoading(false);
        toast.error("Failed to fetch contacts");
      }
    );

    return () => unsubscribe();
  }, []);

  //  FILTER LOGIC (SEPARATE)
  useEffect(() => {
    if (searchTerm === "") {
      setContacts(allContacts);
    } else {
      const filtered = allContacts.filter((c) =>
        c.name.toLowerCase().includes(searchTerm)
      );
      setContacts(filtered);
    }
  }, [searchTerm, allContacts]);

  return (
    <div className="max-w-92.5 mx-auto h-screen flex flex-col">
      
      <Navbar
        openModel={openModel}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        contactFilter={contactFilter}
      />

      <div className="flex flex-col gap-4 flex-1">
        {loading ? (
          <div className="text-center text-white text-xl">LOADING...</div>
        ) : interet ? (
          <div className="text-center text-red-500 text-xl">
            Check your internet...
          </div>
        ) : contact.length === 0 ? (
          <div className="text-center text-white">No Contacts Found</div>
        ) : (
          <div className="scrollBox flex flex-col gap-4 overflow-y-auto flex-1">
            {contact.map((item) => (
              <ContactCard
                key={item.id}
                item={item}
                openModel={openModel}
                closeModel={closeModel}
                isOpen={isOpen}
                setIsUpdate={setIsUpdate}
                isUpdate={isUpdate}
                setSelectedContact={setSelectedContact}
              />
            ))}
          </div>
        )}
      </div>

      <AddDeleteContact
        openModel={openModel}
        closeModel={closeModel}
        isOpen={isOpen}
        isUpdate={isUpdate}
        contact={contact}
        selectedContact={selectedContact}
      />

      <ToastContainer />
    </div>
  );
};

export default App;