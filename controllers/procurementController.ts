// procurementController.ts
import { Request, Response } from 'express';
import { getProcurementData } from '../services/db';
import { PaginationParams } from '../types';

export const getProcurementDataHandler = async (req: Request<{}, {}, {}, PaginationParams>, res: Response) => {
  try {
    const { filter, page = 1, pageSize = 10, sort } = req.query;
    const data = await getProcurementData({ filter, page: Number(page), pageSize: Number(pageSize), sort });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch procurement data' });
  }
};