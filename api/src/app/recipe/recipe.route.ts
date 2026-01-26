import { Router } from "express";
import recipeController from "./recipe.controller";

const router = Router();

router.post("/parse", recipeController.parseRecipe);

export default router;
