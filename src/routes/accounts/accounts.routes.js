import { Router } from "express";
import { methods as accountsController } from "../../controllers/accounts/accounts.controller";

const router = Router();

router.post("/", accountsController.createAccount);

export default router;