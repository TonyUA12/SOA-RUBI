import mongoose, {Schema, Document} from "mongoose";

export type HousePromotionType = Document & {
    houseName: string
    lease:boolean
    purchase:boolean
    datePublished: Date
    address: string
    area: number
    description: string
    price: number
    priceSquareMeter: Number
    currency:string
    contact:string
}


const HousePromotionTypeSchema: Schema = new Schema({
    houseName: {
        type: String,
        required: true,
        trim: true,
    },

    lease: {
        type: Boolean,
        required: true,
        trim: true,
    },

    purchase: {
        type: Boolean,
        required: true,
        trim: true,
    },

    datePublished: {
        type: Date,
        required: true,
        trim: true,
    },

    address: {
        type: String,
        required: true,
        trim: true,
    },
    
    area: {
        type: Number,
        required: true,
        trim: true,
    },

    priceSquareMeter: {
        type: Number,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    currency: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },  
})

const HousePromotionType = mongoose.model<HousePromotionType>('HousePromotions', HousePromotionTypeSchema);
export default HousePromotionType;