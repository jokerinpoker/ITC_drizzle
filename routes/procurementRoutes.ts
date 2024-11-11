// procurementRoutes.ts
import { Router } from 'express';
import { getProcurementDataHandler } from '../controllers/procurementController';

const router = Router();

router.get('/procurement-data', getProcurementDataHandler);

export default router;