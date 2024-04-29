import {Router} from 'express';
import { HousePromotionController } from '../controllers/HousePromotionController'; 

const router = Router();

router.post('/', HousePromotionController.createHousePromotion);
router.get('/', HousePromotionController.getAllHousePromotions);

export default router;