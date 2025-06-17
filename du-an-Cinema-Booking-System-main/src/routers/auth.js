import express from 'express';
import { signin, sigup } from '../controllers/auth';
import { validateRequest } from '../middlewares/validateRequest';
import { signupSchema,signinSchema  } from '../validations/auth';
import { verifyJWT,restrictTo  } from '../middlewares/authRequest';
const authRouter = express.Router();

authRouter.post("/signup",validateRequest(signupSchema),sigup);
authRouter.post("/signin",validateRequest(signinSchema),signin);

authRouter.use(verifyJWT);
// Routes chỉ dành cho admin và user
authRouter.use(restrictTo("admin", "user"))

//  Các route yêu cầu quyền cho admin vs user

export default authRouter;