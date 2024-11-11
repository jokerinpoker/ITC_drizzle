// insightController.ts
import { Request, Response } from 'express';
import { getInsightData, getInsightStatistics } from '../services/db';
import { PaginationParams } from '../types';

export const getInsightDataHandler = async (req: Request<{}, {}, {}, PaginationParams>, res: Response) => {
  try {
    const { filter, page = 1, pageSize = 10, sort } = req.query;
    const data = await getInsightData({ filter, page: Number(page), pageSize: Number(pageSize), sort });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch insight data' });
  }
};

export const getInsightStatisticsHandler = async (req: Request, res: Response) => {
  try {
    const stats = await getInsightStatistics();
    res.json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch insight statistics' });
  }
};