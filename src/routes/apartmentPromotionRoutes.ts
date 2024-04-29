import {Router} from 'express';
import { ApartmentPromotionController } from '../controllers/ApartmentPromotionController'; 

const router = Router();

router.post('/', ApartmentPromotionController.createApartmentPromotion);
router.get('/', ApartmentPromotionController.getAllApartmentPromotions);

export default router;