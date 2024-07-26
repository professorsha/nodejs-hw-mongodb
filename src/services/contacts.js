import { ContactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js'; 

export const getAllContacts = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find();
  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
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
