import mongoose, {Schema, Document} from "mongoose";

export type CommercialPremisesPromotionType = Document & {
    ommercialPremisesName: string
    lease:boolean
    purchase:boolean
    contract:number
    datePublished: Date
    address: string
    area: number
    description: string
    price: number
    currency:string
    contact:string
}


const CommercialPremisesPromotionTypeSchema: Schema = new Schema({
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

    contract: {
        type: Number,
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
        type: Number,
        required: true,
        trim: true,
    },  
})

const CommercialPremisesPromotionType = mongoose.model<CommercialPremisesPromotionType>('CommercialPremisesPromotion', CommercialPremisesPromotionTypeSchema);
export default CommercialPremisesPromotionType;