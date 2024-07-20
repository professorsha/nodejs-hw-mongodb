import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  //   console.log({contact});
  return contact;
};

export const createContact = async (payload) => {
  const contact = ContactsCollection.create(payload);
  return contact;
};
export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findByIdAndDelete(contactId);
  return contact;
};
export const updateContact = async (contactId, contact) => {
  const rawResult = await ContactsCollection.findByIdAndUpdate(contactId, contact,{new:true});
console.log(rawResult);
  //  if (!rawResult || !rawResult.value) return null;

  return rawResult;
  
};
