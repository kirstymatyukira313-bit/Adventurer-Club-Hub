import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import clubsRouter from "./clubs";
import adminRouter from "./admin";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/auth", authRouter);
router.use("/clubs", clubsRouter);
router.use("/admin", adminRouter);

export default router;
