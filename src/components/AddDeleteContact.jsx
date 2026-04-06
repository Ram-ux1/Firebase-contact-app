import React from "react";
import Model from "./Model";
import { Form, Formik, Field } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firbase";

const AddDeleteContact = ({
  openModel,
  closeModel,
  isOpen,
  isUpdate,
  contact,
  selectedContact,
}) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "firbase-contact");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  // update contact functionality
    const updateContact = async (contact,id) => {
    try {
      const contactRef = doc(db, "firbase-contact",id);
      await updateDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("selectContact", selectedContact?.name);

  return (
    <>
      <Model
        openModel={openModel}
        closeModel={closeModel}
        isOpen={isOpen}
        isUpdate={isUpdate}
      >
        <Formik
          enableReinitialize={true}
          initialValues={
            isUpdate
              ? {
                  name: selectedContact?.name || "",
                  email: selectedContact?.email || "",
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ?
            updateContact(values,selectedContact.id):
            addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name">Name: </label>
              <Field required name="name" className="border-2 rounded "></Field>
            </div>
            <div>
              <label htmlFor="email">E-mail: </label>
              <Field
                name="email"
                type="email"
                className="border-2 rounded "
                required
              ></Field>
            </div>
            <div className="flex justify-center items-center ">
              <button className="bg-orange-400 self-end px-2 py-1">
                {isUpdate ? "Update contact" : "Add contact"}
              </button>
            </div>
          </Form>
        </Formik>
      </Model>
    </>
  );
};

export default AddDeleteContact;
