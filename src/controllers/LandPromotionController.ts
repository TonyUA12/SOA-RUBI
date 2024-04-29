import type { Request, Response } from "express"
import LandPromotion from "../models/LandPromotion";

export class LandPromotionController{

    static createLandPromotion = async (req:Request, res:Response) =>{

        const landPromotion = new LandPromotion(req.body);

        try{
            await landPromotion.save()
            res.send('Promocion de Casas creadas');
        } catch(error) {
            console.log(error);
        }

    }


    static getAllLandPromotions = async (req:Request, res:Response) =>{

        res.send('Todas las promociones ventas de Casa');

    }

}