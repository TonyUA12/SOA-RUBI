import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import projectRoutes from './routes/projectRoutes'
import housePromotionRoutes from './routes/housePromotionRoutes'
import apartmentPromotionRoutes from './routes/apartmentPromotionRoutes'
import commercialPremisesPromotionRoutes from './routes/CommercialPremisesRoutes'
import officePromotionRoutes from './routes/officePromotionRoutes'
import landPromotionRoutes from './routes/landPromotionRoutes'
dotenv.config()

connectDB();

const app = express();

app.use(express.json());

//Routes
app.use('/api/projects', projectRoutes );
app.use('/api/housePromotions', housePromotionRoutes );
app.use('/api/apartmentPromotion', apartmentPromotionRoutes );
app.use('/api/commercialPremisesPromotion', commercialPremisesPromotionRoutes );
app.use('/api/officePromotion', officePromotionRoutes);
app.use('./api/landPromotion', landPromotionRoutes)



export default app;