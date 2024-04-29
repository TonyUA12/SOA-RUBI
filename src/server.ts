import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import projectRoutes from './routes/projectRoutes'
import housePromotionRouter from './routes/housePromotionRoutes'
import apartmentPromotionRouter from './routes/apartmentPromotionRoutes'

dotenv.config()

connectDB();

const app = express();

app.use(express.json());

//Routes
app.use('/api/projects', projectRoutes );
app.use('/api/housePromotions', housePromotionRouter );
app.use('/api/apartmentPromotionRouter', apartmentPromotionRouter );

export default app;