import type { Request, Response } from "express"
import OfficePromotion from "../models/OfficePromotion";

export class OfficePromotionController{

    static createOfficePromotion = async (req:Request, res:Response) =>{

        const officePromotion = new OfficePromotion(req.body);

        try{
            await officePromotion.save()
            res.send('Promocion de Casas creadas');
        } catch(error) {
            console.log(error);
        }

    }


    static getAllOfficePromotions = async (req:Request, res:Response) =>{

        res.send('Todas las promociones ventas de Casa');

    }

}