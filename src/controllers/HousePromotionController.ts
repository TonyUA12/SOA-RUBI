import type { Request, Response } from "express"
import HousePromotion from "../models/HousePromotion";

export class HousePromotionController{

    static createHousePromotion = async (req:Request, res:Response) =>{

        const housePromotion = new HousePromotion(req.body);

        try{
            await housePromotion.save()
            res.send('Promocion de Casas creadas');
        } catch(error) {
            console.log(error);
        }

    }


    static getAllHousePromotions = async (req:Request, res:Response) =>{

        res.send('Todas las promociones ventas de Casa');

    }

}