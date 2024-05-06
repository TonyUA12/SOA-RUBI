import {Router} from 'express';
import { CommercialPremisesPromotionController } from '../controllers/CommercialPremisesPromotionController'; 

const router = Router();

router.post('/', CommercialPremisesPromotionController.createCommercialPremisesPromotion);
router.get('/', CommercialPremisesPromotionController.getAllCommercialPremisesPromotions);

export default router;