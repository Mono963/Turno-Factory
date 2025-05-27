import { Router } from "express";
import routerUser from "./route.user";
import routerAppointment from "./route.appointment";

const router: Router = Router();

router.use("/user", routerUser);
router.use("/appointment", routerAppointment);


export default router;
