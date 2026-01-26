import { Request, Response } from "express";
import { logger } from "../../../logger";

const createUser = async (req: Request, res: Response) => {
  logger.info("Creating user", { body: req.body });
  res.status(200).json({ message: "User created" });
};

export default { createUser };
