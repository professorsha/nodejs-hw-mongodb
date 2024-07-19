import express from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = express.Router();
const jsonParse = express.json();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
router.post('/contacts', jsonParse, ctrlWrapper(createContactController));
export default router;
