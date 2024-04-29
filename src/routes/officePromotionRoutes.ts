import {Router} from 'express';
import { OfficePromotionController } from '../controllers/OfficePromotionController'; 

const router = Router();

router.post('/', OfficePromotionController.createOfficePromotion);
router.get('/', OfficePromotionController.getAllOfficePromotions);

export default router;