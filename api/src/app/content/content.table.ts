import { pgEnum, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { createdAt, dbId, updatedAt } from "../../database/shared-drizzle";
import { userTable } from "../user/user.table";

const contentTypeEnum = pgEnum("content_type", ["video", "image", "website"]);
const contentStatusEnum = pgEnum("content_status", [
  "pending",
  "processed",
  "failed",
]);

const savedContentTable = pgTable("saved_contents", {
  id: dbId,
  userId: uuid("user_id")
    .notNull()
    .references(() => userTable.id),
  contentType: contentTypeEnum().notNull(),
  sourceUrl: varchar("source_url", { length: 2048 }).notNull(),
  title: varchar("title", { length: 255 }),
  thumbnailUrl: text("thumbnail_url"),
  status: contentStatusEnum().notNull().default("pending"),
  createdAt,
  updatedAt,
});

export { savedContentTable, contentTypeEnum, contentStatusEnum };
