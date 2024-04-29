import mongoose, {Schema, Document} from "mongoose";

export type TenderType = Document & {
    entityName: string
    datePublished: Date
    nomenclature: string
    objectContract: string
    description: string
    referenceValue: number
    currency:string
    endTenderDate:Date
}


const TenderSchema: Schema = new Schema({
    entityName: {
        type: String,
        required: true,
        trim: true,
    },

    datePublished: {
        type: Date,
        required: true,
        trim: true,
    },

    nomenclature: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    objectContract: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },
    
    referenceValue: {
        type: Number,
        required: true,
        trim: true,
    },
    currency: {
        type: String,
        required: true,
        trim: true,
    },
    endTenderDate: {
        type: Date,
        required: true,
        trim: true,
    },
})

const Project = mongoose.model<TenderType>('Project', TenderSchema);
export default Project;