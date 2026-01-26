import express from "express";
import cors from "cors";
import apiRoutes from "./api.routes";
import { env } from "./env_config";
import { logger } from "./logger";

const app = express();
const port = env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
