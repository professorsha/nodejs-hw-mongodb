import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { loginUserSchema,registerUserSchema } from '../validation/auth.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';


const router = express.Router();
const jsonParser = express.json();

router.post(
  '/register',
  jsonParser,
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  jsonParser,
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

 router.post('/logout', jsonParser, ctrlWrapper(logoutUserController));

 router.post('/refresh', jsonParser, ctrlWrapper(refreshUserSessionController));
export default router;
