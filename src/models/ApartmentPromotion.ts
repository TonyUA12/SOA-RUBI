import mongoose, {Schema, Document} from "mongoose";

export type ApartmentPromotionType = Document & {
    houseName: string
    lease:boolean
    purchase:boolean
    contract:number
    furnished:boolean
    datePublished: Date
    room:Number
    address: string
    description: string
    price: number
    currency:string
    contact:string
}


const ApartmentPromotionTypeSchema: Schema = new Schema({
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


    furnished: {
        type: Boolean,
        required: true,
        trim: true,
    },


    datePublished: {
        type: Date,
        required: true,
        trim: true,
    },

    room: {
        type: Number,
        required: true,
        trim: true,
    },

    address: {
        type: String,
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

const ApartmentPromotionType = mongoose.model<ApartmentPromotionType>('ApartmentPromotion', ApartmentPromotionTypeSchema);
export default ApartmentPromotionType;