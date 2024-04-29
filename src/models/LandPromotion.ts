import mongoose, {Schema, Document} from "mongoose";

export type LandPromotionType = Document & {
    LandName: string
    lease:boolean
    purchase:boolean
    datePublished: Date
    address: string
    area: number
    description: string
    price: number
    currency:string
    contact:string
}


const LandPromotionTypeSchema: Schema = new Schema({
    LandName: {
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
        type: Number,
        required: true,
        trim: true,
    },
    contact: {
        type: String,
        required: true,
        trim: true,
    },  
})

const LandPromotionType = mongoose.model<LandPromotionType>('LandPromotion', LandPromotionTypeSchema);
export default LandPromotionType;