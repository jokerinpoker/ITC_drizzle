// schema.ts
import { pgTable, serial, varchar, numeric, integer } from 'drizzle-orm/pg-core';

export const insights = pgTable("insights", {
  id: serial("id").primaryKey(),
  name: varchar("name"),   // 移除长度限制
  value: integer("value"),
});

export const procurements = pgTable("procurements", {
  id: serial("id").primaryKey(),
  type: varchar("type"),   // 移除长度限制
  amount: numeric("amount"),  // 移除精度和小数位
});