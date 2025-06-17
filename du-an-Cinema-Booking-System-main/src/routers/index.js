import express from 'express';
import authRouter from './auth';
import cinimaRouter from './cinima';

const router = express.Router();

router.use("/cinema", cinimaRouter);
router.use("/auth", authRouter)
export default router;