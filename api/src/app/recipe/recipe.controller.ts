import { logger } from "../../../logger";
import { Request, Response } from "express";

const parseRecipe = async (req: Request, res: Response) => {
  logger.info("Parsing recipe", { body: req.body });
  res.status(200).json({ message: "Recipe parsed" });
};

export default { parseRecipe };
