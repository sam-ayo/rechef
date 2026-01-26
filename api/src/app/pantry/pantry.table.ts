import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { dbId, updatedAt } from "../../database/shared-drizzle";
import { userTable } from "../user/user.table";

const userPantryTable = pgTable("user_pantry", {
  id: dbId,
  userId: uuid("user_id")
    .notNull()
    .references(() => userTable.id),
  name: varchar("name", { length: 255 }).notNull(),
  quantity: varchar("quantity", { length: 50 }),
  unit: varchar("unit", { length: 50 }),
  updatedAt,
});

export { userPantryTable };
