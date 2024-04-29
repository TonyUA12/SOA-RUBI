import {Router} from 'express';
import { LandPromotionController } from '../controllers/LandPromotionController'; 

const router = Router();

router.post('/', LandPromotionController.createLandPromotion);
router.get('/', LandPromotionController.getAllLandPromotions);

export default router;