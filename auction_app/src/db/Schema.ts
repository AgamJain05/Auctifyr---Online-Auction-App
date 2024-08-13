import {pgTable, serial} from "drizzle-orm/pg-core";

export const bids = pgTable("bb- bids", {
  id: serial("id").primaryKey()
});