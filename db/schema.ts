import { pgTableCreator, text } from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `finance_${name}`);

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
});
