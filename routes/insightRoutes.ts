// insightRoutes.ts
import { Router } from 'express';
import { getInsightDataHandler, getInsightStatisticsHandler } from '../controllers/insightController';

const router = Router();

router.get('/insight-data', getInsightDataHandler);
router.get('/insight-statistics', getInsightStatisticsHandler);

export default router;