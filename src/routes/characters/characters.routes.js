import { Router } from "express";
import { methods as charactersController } from "../../controllers/characters/characters.controller";

const router = Router();

router.get("/", charactersController.getCharacters)

export default router;