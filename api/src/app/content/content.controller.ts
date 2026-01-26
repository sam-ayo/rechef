import { logger } from "../../../logger";
import { Request, Response } from "express";

const parseContent = async (req: Request, res: Response) => {
  logger.info("Parsing content", { body: req.body });
  res.status(200).json({ message: "Content parsed" });
};

export default { parseContent };
