// index.ts
import express from 'express';
import dotenv from 'dotenv';
import insightRoutes from '../routes/insightRoutes';
import procurementRoutes from '../routes/procurementRoutes';

dotenv.config();

const app = express();

app.use('/api', insightRoutes);
app.use('/api', procurementRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});