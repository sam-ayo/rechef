import { timestamp, uuid } from "drizzle-orm/pg-core";

const createdAt = timestamp({ withTimezone: true }).defaultNow().notNull();
const updatedAt = timestamp({ withTimezone: true })
  .defaultNow()
  .notNull()
  .$onUpdate(() => new Date());

const dbId = uuid().primaryKey().defaultRandom();

export { createdAt, updatedAt, dbId };
