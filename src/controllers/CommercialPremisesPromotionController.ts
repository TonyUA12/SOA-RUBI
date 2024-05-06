import type { Request, Response } from "express"
import CommercialPremisesPromotion from "../models/CommercialPremisesPromotion";

export class CommercialPremisesPromotionController{

    static createCommercialPremisesPromotion = async (req:Request, res:Response) =>{

        const commercialPremisesPromotion = new CommercialPremisesPromotion(req.body);

        try{
            await commercialPremisesPromotion.save()
            res.send('Promocion de Casas creadas');
        } catch(error) {
            console.log(error);
        }

    }


    static getAllCommercialPremisesPromotions = async (req:Request, res:Response) =>{

        res.send('Todas las promociones ventas de Casa');

    }

}