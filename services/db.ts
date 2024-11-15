import { drizzle } from 'drizzle-orm/postgres-js';
import { Pool } from 'pg'; // 使用 PostgreSQL 连接池
import { insights, procurements } from './schema';
import { paginate, filterData, sortData } from './utils';
import { PaginationParams, Insight, Procurement } from '../types';

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT),
});

export const db = drizzle(pool);

export const getInsightData = async (params: PaginationParams): Promise<Insight[]> => {
  let data: Insight[] = await db.select().from(insights);
  if (params.filter) data = filterData(data, params.filter);
  if (params.sort) data = sortData(data, params.sort);
  return paginate(data, params.page, params.pageSize);
};

export const getProcurementData = async (params: PaginationParams): Promise<Procurement[]> => {
  let data: Procurement[] = await db.select().from(procurements);
  if (params.filter) data = filterData(data, params.filter);
  if (params.sort) data = sortData(data, params.sort);
  return paginate(data, params.page, params.pageSize);
};

export const getInsightStatistics = async (): Promise<any> => {
  const result = await pool.query(`SELECT COUNT(*) AS count FROM insights`);
  return result.rows[0].count; // 返回统计结果
};