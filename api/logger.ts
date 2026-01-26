import winstonDevConsole from "@epegzz/winston-dev-console";
import { createLogger, format } from "winston";

import { env } from "./env_config";

let logger = createLogger({
  level: "silly",
  format: format.json(),
  defaultMeta: { service: "hariat" },
  // transports: env.isProduction ? [new Sentry(sentryOptions)] : undefined
});

if (env.isDevelopment) {
  logger = winstonDevConsole.init(logger);
  logger.add(
    winstonDevConsole.transport({
      showTimestamps: true,
      addLineSeparation: true,
    }),
  );
}

export { logger };
