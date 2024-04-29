import type { Request, Response } from "express"
import ApartmentPromotion from "../models/ApartmentPromotion";

export class ApartmentPromotionController{

    static createApartmentPromotion = async (req:Request, res:Response) =>{

        const apartmentPromotion = new ApartmentPromotion(req.body);

        try{
            await apartmentPromotion.save()
            res.send('Promocion de Casas creadas');
        } catch(error) {
            console.log(error);
        }

    }


    static getAllApartmentPromotions = async (req:Request, res:Response) =>{

        res.send('Todas las promociones ventas de Casa');

    }

}